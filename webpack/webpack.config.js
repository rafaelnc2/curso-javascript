//configurações do webpack

const modoDev = process.env.NODE_ENV !== "production";
//valida se está rodando no modo DEV ou no modo BUILD produção
const webpack = require("webpack");
//Externalizar os estilos em arquivos CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptmizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: modoDev ? "development" : "production",
    //mode: "development", //indica que o webpack transformará o arquivo no formato DEV da aplicação
    //mode: "production", //indica que o webpack transformará o arquivo no formato PROD da aplicação (minificado)
    entry: "./src/principal.js", //indica qual será o arquivo de entrada do sistema
    output: {
        //configura os dados de saída (pasta e nome do arquivo)
        filename: "principal.js",
        path: __dirname + "/public"
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        //inicializa os minificadores e otimizadores
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css" //informa qual será o nome do arquivo final com os estilos CSS
        })
    ],
    module: {
        //informa quais serão os loaders e suas regras a serem carregados (loaders para css, por exemplo)
        //identifica o loader através de expressões regulares.
        //no exemplo abaixo, informa que serão lidos todos os arquivos com a extensão CSS
        rules: [{
                //test: /\.css$/, //interpreta apenas para arquivos com a extensão CSS
                test: /\s?[ac]ss$/, //interpreta arquivos SASS, SCSS ou CSS
                use: [
                    MiniCssExtractPlugin.loader, //Le os estilos e cria um novo arquivo externo para eles 
                    //referenciando na página html
                    //informa qual será o plugin utilizado para a leitura do arquivo
                    //Não é necessário utilizar o "style-loader pois, ele adiciona os estilos no corpo da página"
                    //"style-loader", //Adiciona CSS a DOM injetando a tag <style>
                    "css-loader", //reponsável por interpretar @import, url()....
                    "sass-loader" //reponsável por interpretar arquivos SASS....
                ]
            },{
                test: /\.(png|svg|jpg|gif)$/, //testa os arquivos a serem importados
                use: ["file-loader"]
            }
        ]
    }
}