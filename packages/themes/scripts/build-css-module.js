import * as theme from '../dist/index.js'
import fs from 'fs'

const generateThemeCss = () => {
  const variables = generateThemeCssVariables()
  const classes = generateThemeCssClasses()
  fs.writeFileSync('dist/themes.css', variables + classes)
}

generateThemeCss()

function generateThemeCssVariables() {
  const { box, typography, colors } = theme.vars
  const { dark, light } = colors.$static

  return (
    buildCssVariables(light) +
    buildCssVariables(dark, 'theme-dark') +
    buildCssVariables(box) +
    buildCssVariables(typography)
  )
}

function generateThemeCssClasses() {
  return buildCssClasses(theme.classes.typography)
}

function buildCssVariables(obj, className = '') {
  let result = ':root ' + (className && `.${className} `) + '{'

  for (const propName in obj) {
    let cssVar = ''
    const values = obj[propName]

    for (const relative_value in values) {
      const absolute_value = values[relative_value]
      cssVar = `--${camelToKebab(
        propName
      )}-${relative_value} : ${absolute_value}\;`
      result += '\n  ' + cssVar
    }
  }
  result += '\n}\n'

  return result
}

function buildCssClasses(obj) {
  let result = ''

  for (const element in obj) {
    for (const relative_value in obj[element]) {
      let cssLine = '.' + element + '-' + relative_value + ' {\n'
      Object.entries(obj[element][relative_value]).forEach(
        ([propName, absolute_value]) => {
          cssLine += `  ${camelToKebab(propName)}: ${absolute_value};\n`
        }
      )
      result += cssLine + '}\n'
    }
    return result
  }
}

function camelToKebab(camelCaseString) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
