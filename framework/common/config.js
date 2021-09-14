const path = require('path')
const merge = require('deepmerge')
const fs = require('fs')
const prettier = require('prettier')

const ALLOWED_FW = ['shopify', 'bigcommerce', 'shopify_local']
const FALLBACK_FW = 'shopify'
//Framework specific configuration
const withFrameworkConfig = (defaultConfig = {}) => {
    let framework = defaultConfig?.framework?.name
    //Framework not provided
    if (!framework)
        throw new Error(
            'The api is missing framework. Please provide valid framework provider!'
        )
    //Framework other than allowed frameworks
    if (!ALLOWED_FW.includes(framework))
        throw new Error(
            `The api framework ${framework} cannot be found, please use one of the ${ALLOWED_FW.join(
                ', '
            )} frameworks!`
        )
    //Handling development and production
    if (framework === 'shopify_local') framework = FALLBACK_FW
    const frameworkNextConfig = require(path.join(
        '../',
        framework,
        'next.config'
    ))
    const config = merge(defaultConfig, frameworkNextConfig)

    const tsPath = path.join(process.cwd(), 'tsconfig.json')
    const tsConfig = require(tsPath)
    tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
    tsConfig.compilerOptions.paths['@framework/*'] = [
        `framework/${framework}/*`
    ]

    fs.writeFileSync(
        tsPath,
        prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
    )
    return config
}

module.exports = { withFrameworkConfig }
