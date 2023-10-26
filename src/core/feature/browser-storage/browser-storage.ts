const KEY = "redux";
export function loadState(sufix: string) {
    try {
        const serializedState = localStorage.getItem(`${sufix}_${KEY}`);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

export async function saveState(sufix: string, state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(`${sufix}_${KEY}`, serializedState);
    } catch (e) {
        // Ignore
    }
}

export async function removeState(sufix: string) {
    try {
        localStorage.removeItem(`${sufix}_${KEY}`);
    } catch (e) {
        // Ignore
    }
}