import { Pipe, PipeTransform, NgModule } from '@angular/core';

export type ByteUnit = 'B' | 'kB' | 'KB' | 'MB' | 'GB' | 'TB';

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  static formats: { [key: string]: { max: number; prev?: ByteUnit } } = {
    B: { max: 1024 },
    kB: { max: Math.pow(1024, 2), prev: 'B' },
    KB: { max: Math.pow(1024, 2), prev: 'B' }, // Backward compatible
    MB: { max: Math.pow(1024, 3), prev: 'kB' },
    GB: { max: Math.pow(1024, 4), prev: 'MB' },
    TB: { max: Number.MAX_SAFE_INTEGER, prev: 'GB' },
  };

  static formatResult(result: number, unit: string): string {
    return `${result} ${unit}`;
  }

  static calculateResult(format: { max: number; prev?: ByteUnit }, bytes: number) {
    const prev = format.prev ? SizePipe.formats[format.prev] : undefined;
    return prev ? bytes / prev.max : bytes;
  }

  transform(input: any, decimal: number = 0, from: ByteUnit = 'B', to?: ByteUnit): any {

    let bytes = input;
    let unit = from;
    while (unit !== 'B') {
      bytes *= 1024;
      unit = SizePipe.formats[unit].prev;
    }

    if (to) {
      const format = SizePipe.formats[to];

      const result = toDecimal(SizePipe.calculateResult(format, bytes), decimal);

      return SizePipe.formatResult(result, to);
    }

    for (const key in SizePipe.formats) {
      if (SizePipe.formats.hasOwnProperty(key)) {
        const format = SizePipe.formats[key];
        if (bytes < format.max) {
          const result = toDecimal(SizePipe.calculateResult(format, bytes), decimal);

          return SizePipe.formatResult(result, key);
        }
      }
    }
  }

}

function toDecimal(value: number, decimal: number): number {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

@NgModule({
  declarations: [SizePipe],
  exports: [SizePipe],
})
export class NgBytesPipeModule {}
