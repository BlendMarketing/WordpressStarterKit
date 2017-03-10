echo "What is the name of your custom theme (no spaces)"
read themeName

find ./ -name "webpack.*" -exec sed -i "/const themeName/c\const themeName = \"$themeName\";" {} \;

mkdir -p themes/$themeName
mv tmp/assets themes/$themeName

if [ ! -f ./package.json ]; then
    sudo npm init
fi

sudo npm install \
    webpack \
    image-webpack-loader \
    file-loader \
    style-loader \
    css-loader \
    raw-loader \
    postcss-loader \
    sass-loader \
    html-webpack-plugin \
    extract-text-webpack-plugin \
    script-ext-html-webpack-plugin \
    babel \
    babel-core \
    babel-loader \
    babel-plugin-transform-runtime \
    babel-preset-es2015 \
    babel-runtime \
    babel-preset-stage-2 \
    moment \
    underscore \
    jquery \
    normalize.css \
    bourbon \
    bourbon-neat \
    sass-mq \
    node-sass \
    backbone \
    rivets \
    rivets-backbone-adapter \
    rivets-stdlib \
    --save

sudo npm install \
    webpack-dev-server \
    --save-dev

sudo npm shrinkwrap

composer require \
    vlucas/phpdotenv \
    johnpbloch/wordpress \
    wpackagist-plugin/advanced-custom-fields \
    wpackagist-theme/twentyseventeen

chmod +x ./post-composer-cmds.sh && ./post-composer-cmds.sh

rm -rf .git tmp

echo ""
echo "*************************************"
echo "*    Wordpress install completed    *"
echo "*************************************"
echo "Please configure the database connection in \`.env\`"
echo ""
echo "Once completed start the webpack dev server"
echo ""
echo "\`./node_modules/.bin/webpack-dev-server --config webpack.dev-server.config.js --inline --hot\`"
echo ""
