#!/bin/bash

#################################### 
# Clear out themes and plugins directory 
#################################### 
rm -rf public/wp-conntent/themes
rm -rf public/wp-conntent/plugins

#################################### 
# Create themes and plugins directory
#################################### 
mkdir -p public/wp-content/themes
mkdir -p public/wp-content/plugins



ln -sf ../wp-vendor/wordpress/ public/wordpress 

#################################### 
# Symlink Themes
#################################### 
THEMES=wp-vendor/themes/*
for t in $THEMES
do
    THEME=$(basename "$t")
    echo "Processing $THEME theme"
    ln -sf ../../../wp-vendor/themes/$THEME/ public/wp-content/themes/$THEME
done
echo "Done processing vendor themes" 
THEMES=themes/*
for t in $THEMES
do
    THEME=$(basename "$t")
    echo "Processing $THEME theme"
    ln -sf ../../../themes/$THEME/ public/wp-content/themes/$THEME
done
echo "Done processing user themes" 

#################################### 
# Symlink Plugins
#################################### 
PLUGINS=wp-vendor/plugins/*
for p in $PLUGINS
do
    PLUGIN=$(basename "$p")
    echo "Processing $PLUGIN plugin..."
    ln -sf ../../../wp-vendor/plugins/$PLUGIN/ public/wp-content/plugins/$PLUGIN
done
echo "Done processing vendor plugins." 
PLUGINS=plugins/*
for p in $PLUGINS
do
    PLUGIN=$(basename "$p")
    echo "Processing $PLUGIN plugin..."
    ln -sf ../../../plugins/$PLUGIN/ public/wp-content/plugins/$PLUGIN
done
echo "Done processing user plugins." 
