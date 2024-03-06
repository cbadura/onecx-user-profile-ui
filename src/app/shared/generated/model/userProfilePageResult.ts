/**
 * onecx-user-profile-bff
 * OneCx user profile Bff
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserProfile } from './userProfile';


export interface UserProfilePageResult { 
    /**
     * The total elements in the resource.
     */
    totalElements?: number;
    number?: number;
    size?: number;
    totalPages?: number;
    stream?: Array<UserProfile>;
}

