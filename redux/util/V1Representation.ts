import {LevelData} from "../store/State";

export function parse(a: string): LevelData | null {
    const o = JSON.parse(a.replaceAll(/;.*\n/g, "").trim());
    if (o.version != 1) return null;
    return {colors: o["colors"], queues: o["queues"]};
}

const pretext = "; ==============================================================================\n" +
    "; This file is to be opened by Panic Painter Level Editor.\n" +
    ";\n" +
    "; To install, go to:\n" +
    ";     https://workspace.google.com/marketplace/app/appname/656662885342\n" +
    "; Access limited to individuals affiliated with Cornell University.\n" +
    "; ==============================================================================\n" +
    "\n\n\n"

export function stringify(o: LevelData, forExport: boolean = false): string {
    return (!forExport ? pretext : "") + JSON.stringify({...o, version: 1}, null, forExport ? 2 : undefined);
}