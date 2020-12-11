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


import {Api} from './';
import {List} from 'immutable';
import {all, fork, put, takeLatest} from "redux-saga/effects";
import {apiCall, createSagaAction as originalCreateSagaAction, BasePayloadApiAction, NormalizedRecordEntities, normalizedEntities} from "../runtimeSagasAndRecords";
import {Action} from "redux-ts-simple";

import {
    GetMatchingRolesResponse,
    GetMatchingRolesResponseRecord,
    getMatchingRolesResponseRecordUtils,
    GetProductTypeResponse,
    GetProductTypeResponseRecord,
    getProductTypeResponseRecordUtils,
    MatchingRolesRecord,
    ProductType,
} from '../models';

const createSagaAction = <T>(type: string) => originalCreateSagaAction<T>(type, {namespace: "api_affiliateApi"});

export const affiliateApiSagaMap = new Map<string, () => Generator<any, any, any>>([
    	["getAffiliateProductType", getAffiliateProductTypeSaga],
    	["getMatchingRoles", getMatchingRolesSaga],
	]
);

export function *affiliateApiAllSagas() {
	yield all([...affiliateApiSagaMap.values()].map(actionSaga => fork(actionSaga)));
}

//region getAffiliateProductType

export interface PayloadGetAffiliateProductType extends PayloadGetAffiliateProductTypeRequest {
}

export interface PayloadGetAffiliateProductTypeRequest {
    affiliateId: string;
}

export const getAffiliateProductTypeRequest = createSagaAction<PayloadGetAffiliateProductTypeRequest>("getAffiliateProductTypeRequest");
export const getAffiliateProductTypeSuccess = createSagaAction<ProductType>("getAffiliateProductTypeSuccess");
export const getAffiliateProductTypeFailure = createSagaAction<any>("getAffiliateProductTypeFailure");

export const getAffiliateProductType = createSagaAction<PayloadGetAffiliateProductType>("getAffiliateProductType");

export function *getAffiliateProductTypeSaga() {
	yield takeLatest(getAffiliateProductType, getAffiliateProductTypeSagaImp);
}

export function *getAffiliateProductTypeSagaImp(_action_: Action<PayloadGetAffiliateProductType>) {
	try {
        const {
            affiliateId,
   		} = _action_.payload;

		yield put(getAffiliateProductTypeRequest(_action_.payload));

		const response: Required<GetProductTypeResponse> = yield apiCall(Api.affiliateApi, Api.affiliateApi.getAffiliateProductType,
            parseFloat(affiliateId),
		);

		let successReturnValue: any = undefined;
    		successReturnValue = getProductTypeResponseRecordUtils.fromApiPassthrough(response);
	    	yield put(getAffiliateProductTypeSuccess(successReturnValue));

		return successReturnValue;
	} catch (error) {
		yield put(getAffiliateProductTypeFailure(error));
		return error;
	}
}
//endregion
//region getMatchingRoles

export interface PayloadGetMatchingRoles extends PayloadGetMatchingRolesRequest, BasePayloadApiAction {
}

export interface PayloadGetMatchingRolesRequest {
    affiliateId: string;
    video: boolean;
    mono: boolean;
    claperEnabled: boolean;
    messaging: boolean;
    signage: boolean;
    audioBitRate?: string;
    relatedMediaType?: string;
    brandingType?: string;
}

export const getMatchingRolesRequest = createSagaAction<PayloadGetMatchingRolesRequest>("getMatchingRolesRequest");
export const getMatchingRolesSuccess = createSagaAction<MatchingRolesRecord>("getMatchingRolesSuccess");
export const getMatchingRolesSuccess_Entities = createSagaAction<NormalizedRecordEntities>("getMatchingRolesSuccess_Entities");
export const getMatchingRolesFailure = createSagaAction<any>("getMatchingRolesFailure");

export const getMatchingRoles = createSagaAction<PayloadGetMatchingRoles>("getMatchingRoles");

export function *getMatchingRolesSaga() {
	yield takeLatest(getMatchingRoles, getMatchingRolesSagaImp);
}

export function *getMatchingRolesSagaImp(_action_: Action<PayloadGetMatchingRoles>) {
	try {
		const {toEntities, toInlined = !toEntities, ...requestPayload} = _action_.payload;
        const {
            affiliateId,
            video,
            mono,
            claperEnabled,
            messaging,
            signage,
            audioBitRate,
            relatedMediaType,
            brandingType,
   		} = _action_.payload;

		yield put(getMatchingRolesRequest(requestPayload));

		const response: Required<GetMatchingRolesResponse> = yield apiCall(Api.affiliateApi, Api.affiliateApi.getMatchingRoles,
            parseFloat(affiliateId),
            video,
            mono,
            claperEnabled,
            messaging,
            signage,
            audioBitRate,
            relatedMediaType,
            brandingType,
		);

		let successReturnValue: any = undefined;
		if (toEntities) {
			successReturnValue = getMatchingRolesResponseRecordUtils.fromApiPassthroughAsEntities(response);
			yield put(normalizedEntities(successReturnValue));
			yield put(getMatchingRolesSuccess_Entities(successReturnValue));
		}
		if (toInlined) {
    		successReturnValue = getMatchingRolesResponseRecordUtils.fromApiPassthrough(response);
	    	yield put(getMatchingRolesSuccess(successReturnValue));
		}

		return successReturnValue;
	} catch (error) {
		yield put(getMatchingRolesFailure(error));
		return error;
	}
}
//endregion
