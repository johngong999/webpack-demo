const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "9"
        },
        useBuiltIns: "entry",
        corejs: 3
      },
    ],
  ];
  
  module.exports = { presets };