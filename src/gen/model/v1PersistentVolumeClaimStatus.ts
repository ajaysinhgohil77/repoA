/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1PersistentVolumeClaimCondition } from './v1PersistentVolumeClaimCondition';

/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
*/
export class V1PersistentVolumeClaimStatus {
    /**
    * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    /**
    * Represents the actual resources of the underlying volume.
    */
    'capacity'?: { [key: string]: string; };
    /**
    * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to \'ResizeStarted\'.
    */
    'conditions'?: Array<V1PersistentVolumeClaimCondition>;
    /**
    * Phase represents the current phase of PersistentVolumeClaim.
    */
    'phase'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>"
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1PersistentVolumeClaimCondition>"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimStatus.attributeTypeMap;
    }
}

