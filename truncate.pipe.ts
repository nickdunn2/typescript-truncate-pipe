import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
    transform(description: string, args: string[]): string {
        if (!description) {
            return;
        }

        let limit = args.length > 0 ? parseInt(args[ 0 ], 10) : 10;
        let trail = args.length > 1 ? args[ 1 ] : '...';
        description = this.cleanDescription(description);

        return this.trimDescription(description, limit) + trail;

    }

    cleanDescription(description: string) {
        let elem = document.createElement('textarea');
        let encoded = description.replace(/<\/?[^>]+(>|$)/g, '');
        elem.innerHTML = encoded;

        return elem.value;
    }

    trimDescription(description: string, limit: number) {
        let trimmedDescription = description.substr(0, limit);

        return trimmedDescription.substr(0, Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(" ")));
    }
}
