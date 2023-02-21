const dynamicImportAll = (async (entities: [string]) => {
    let defaultExportTable = <any>[];
    await entities.forEach(async (entity: any) => {
        const entityName = entity.split(".")[0];
        const {default: inside} = await import(`./entities/${entityName}`);
        //console.log(inside);
        defaultExportTable.push(inside);
    });
    return defaultExportTable;
})

export default dynamicImportAll;