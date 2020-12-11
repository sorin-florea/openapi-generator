/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories} from "../runtimeSagasAndRecords";
import {List, Record, RecordOf} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";

import {
    Role,
} from './Role';



export const RoleRecordProps = {
	recType: "RoleRecord" as "RoleRecord",
    id: "-1",
    name: "",
};

export type RoleRecordPropsType = typeof RoleRecordProps;
export const RoleRecord = Record(RoleRecordProps, RoleRecordProps.recType);
export type RoleRecord = RecordOf<RoleRecordPropsType>;

knownRecordFactories.set(RoleRecordProps.recType, RoleRecord);


class RoleRecordUtils extends ApiRecordUtils<Role, RoleRecord> {
	public normalize(apiObject: Role, asEntity?: boolean): Role {
		(apiObject as any).recType = "RoleRecord";
        (apiObject as any).id = apiObject.id.toString();
		return apiObject;
	}

	public toApi(record: RoleRecord): Role {
        const apiObject = super.toApi(record);
        apiObject.id = parseFloat(record.id);
        return apiObject;
    }
}

export const roleRecordUtils = new RoleRecordUtils();
