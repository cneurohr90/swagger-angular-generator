/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '|shared/forms';
import {FormArrayExtended} from '../../../common/formArrayExtended';
import {FormMap} from '../../../common/formMap';
import {StructuresService} from '../../../controllers/Structures';

@Injectable()
export class Structures_mapFormService {
  form: FormGroup;
  constructor(
    private structuresService: StructuresService,
  ) {
    this.form = new FormGroup({
      mapSection: new FormMap(() => (
        new FormGroup({
          control: new FormControl(undefined, []),
          group: new FormGroup({
            id: new FormControl(undefined, [Validators.required]),
            name: new FormControl(undefined, []),
          }, []),
          arrayOfObjects: new FormArrayExtended(() => (
            new FormGroup({
              id: new FormControl(undefined, [Validators.required]),
              name: new FormControl(undefined, []),
            }, [])), [], []),
          mapRef: new FormMap(() => (
            new FormControl(undefined, [])), {}, []),
          mapInlinePrimitive: new FormMap(() => (
            new FormControl(undefined, [])), {}, []),
          mapInlineRef: new FormMap(() => (
            new FormGroup({
              id: new FormControl(undefined, [Validators.required]),
              name: new FormControl(undefined, []),
            }, [])), {}, []),
          arrayOfMaps: new FormArrayExtended(() => (
            new FormMap(() => (
              new FormControl(undefined, [])), {}, [])), [], []),
        }, [Validators.required])), {}, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.structuresService.structures_map(data);
  }
}