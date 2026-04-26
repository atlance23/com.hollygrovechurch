/**
 * @Filename: [lexer.js]
 * @Description: [JSON Component Definition Parser]
 * @Version: [v0.0.1]
 * @Author: [@atlance23]
 */

/** 
 * =======================
 *   [### VARIABLES ###] 
 * =======================
 */

const filePath = './../../data/styles/hero.json'

/** 
 * =========================
 *   [### ENTRY POINT ###] 
 * =========================
 */

export async function Tokenize() {
    let stream = await GetDataFile(filePath);
    await iterator(stream);
}

/** 
 * =========================
 *   [### FILE READER ###] 
 * =========================
 */

async function iterator(obj) {
    const def = obj;
    if (!Array.isArray(def)) return;

    for(let i = 0; i < def.length; i++) {
        const component = def[i];
        
        // 1. Log the current component name
        console.log(
            "Found Component:", 
            component?.componentMeta?.name, 
            component?.componentMeta?.elementTag,
            component?.componentMeta?.id,
            component?.componentMeta?.classes,
            component?.componentMeta?.styles?.imageUri
        );

        // 2. Recursively check if there are any child components to read
        if (component?.childComponents && Array.isArray(component.childComponents)) {
            await iterator(component.childComponents);
        }
    }
}

/** 
 * ========================
 *   [### FETCH FILE ###]
 * ========================
 */

export async function GetDataFile(filePath) {
    const componentDefinition = await fetch(filePath);
    const data = await componentDefinition.json();
    return data;
}