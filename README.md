# Swivl test
### Brief description
Application of fetching github users and displaying their followers. Works both on android and ios.
### Technologies
* react-native (with expo)
* redux
* react-navigation
* jest + enzyme
### Structure
`/assets` - directory with different images and other stuff;
`/components` - ui react components, which are not connected to redux and may be reused;
`/config` - project configuration files;
`/screens` - sources for routes defined in `routeConfig.js`;
`/shapes` - pre-defined shapes of models (like user) for react propTypes.