import { Injectable } from "@angular/core";
import { LazyMapsAPILoaderConfigLiteral } from "@agm/core";
import { find } from 'lodash';

import { ApiService } from '../services/api.service';

@Injectable()
export class GoogleMapConfig implements LazyMapsAPILoaderConfigLiteral {
    public apiKey: string;
    public libraries: string[];

    constructor() {
      this.apiKey = 'AIzaSyBu3nqYKppRr8eWORscheIfPflbe0k3QOI';
      this.libraries = ['places'];
    }
}
