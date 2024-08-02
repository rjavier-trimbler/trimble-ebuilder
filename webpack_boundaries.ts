import { Configuration, NormalModuleReplacementPlugin } from 'webpack';

type TBoundaries = {
   [s: string] : NormalModuleReplacementPlugin
}

export const BOUNDARIES: TBoundaries = {
    NO_TRIMBLE_BUNDLES: new NormalModuleReplacementPlugin(
      /@trimble-oss/,
      (resource) => {
        throw new Error(`Importing trimble is not allowed: ${resource.request}`);
      }
    ),
}

export default (config: Configuration) => {

  return (boundaries: TBoundaries[])=>{
    const baseConfig = {
      ...config,
      plugins:[
        ...(config.plugins || []),
      ]
    }
    if(boundaries.length > 0){
      return ({
        ...baseConfig,
        plugins:[
          ...baseConfig.plugins,
          ...boundaries
        ],
      })
    }

    return baseConfig;
  }
};