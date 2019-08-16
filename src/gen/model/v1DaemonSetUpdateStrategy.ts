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

import { V1RollingUpdateDaemonSet } from './v1RollingUpdateDaemonSet';

/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
export class V1DaemonSetUpdateStrategy {
    'rollingUpdate'?: V1RollingUpdateDaemonSet;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "V1RollingUpdateDaemonSet"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonSetUpdateStrategy.attributeTypeMap;
    }
}

