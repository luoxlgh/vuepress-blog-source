
export const getNavArr = () => {
    // const dir = process.cwd() + module.dir;
    // fs.readdir(dir, (err, fileNames) => {
    //     if (err)
    //         console.log(dir + ' 读取失败');
    //     else {
    //         const hasDev = fileNames.includes('config.dev.json');
    //         const processPush = (regionInfo, file) => {
    //             try {
    //                 const currentConfig = fs.readFileSync(dir + '/' + file, encode);
    //                 if (currentConfig) {
    //                     const [service, operateType] = attr.split('.');
    //                     request.push(Object.assign({
    //                         operateType,
    //                         service: service.toUpperCase(),
    //                         version,
    //                         config: currentConfig,
    //                     }, regionInfo), env, hasDev);
    //                 }
    //             } catch (e) {
    //                 console.log(`本地缺少${file}文件`);
    //             }
    //         };
    //         Object.keys(envConfig).forEach((file) => {
    //             processPush(envConfig[file], file);
    //         });
    //         if (hasDev)
    //             processPush(devConfig.config, devConfig.name);
    //     }
    // });
};
