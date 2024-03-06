import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core'
import { Timezone } from '../models/localAndTimezone.model'

@Injectable({ providedIn: 'root' })
export class LocalAndTimezoneService {
  getTimezoneData(): Observable<Timezone[]> {
    return of([
      { name: 'Pacific/Niue', utc: '(GMT-11:00) Niue', factor: 'GMT -11' },
      { name: 'Pacific/Pago_Pago', utc: '(GMT-11:00) Pago Pago', factor: 'GMT -11' },
      { name: 'Pacific/Honolulu', utc: '(GMT-10:00) Hawaii Time', factor: 'GMT -10' },
      { name: 'Pacific/Rarotonga', utc: '(GMT-10:00) Rarotonga', factor: 'GMT -10' },
      { name: 'Pacific/Tahiti', utc: '(GMT-10:00) Tahiti', factor: 'GMT -10' },
      { name: 'Pacific/Marquesas', utc: '(GMT-09:30) Marquesas', factor: 'GMT -9:30' },
      { name: 'America/Anchorage', utc: '(GMT-09:00) Alaska Time', factor: 'GMT -9' },
      { name: 'Pacific/Gambier', utc: '(GMT-09:00) Gambier', factor: 'GMT -9' },
      { name: 'America/Los_Angeles', utc: '(GMT-08:00) Pacific Time', factor: 'GMT -8' },
      { name: 'America/Tijuana', utc: '(GMT-08:00) Pacific Time - Tijuana', factor: 'GMT -8' },
      { name: 'America/Vancouver', utc: '(GMT-08:00) Pacific Time - Vancouver', factor: 'GMT -8' },
      { name: 'America/Whitehorse', utc: '(GMT-08:00) Pacific Time - Whitehorse', factor: 'GMT -8' },
      { name: 'Pacific/Pitcairn', utc: '(GMT-08:00) Pitcairn', factor: 'GMT -8' },
      { name: 'America/Dawson_Creek', utc: '(GMT-07:00) Mountain Time - Dawson Creek', factor: 'GMT -7' },
      { name: 'America/Denver', utc: '(GMT-07:00) Mountain Time', factor: 'GMT -7' },
      { name: 'America/Edmonton', utc: '(GMT-07:00) Mountain Time - Edmonton', factor: 'GMT -7' },
      { name: 'America/Hermosillo', utc: '(GMT-07:00) Mountain Time - Hermosillo', factor: 'GMT -7' },
      { name: 'America/Mazatlan', utc: '(GMT-07:00) Mountain Time - Chihuahua, Mazatlan', factor: 'GMT -7' },
      { name: 'America/Phoenix', utc: '(GMT-07:00) Mountain Time - Arizona', factor: 'GMT -7' },
      { name: 'America/Yellowknife', utc: '(GMT-07:00) Mountain Time - Yellowknife', factor: 'GMT -7' },
      { name: 'America/Belize', utc: '(GMT-06:00) Belize', factor: 'GMT -6' },
      { name: 'America/Chicago', utc: '(GMT-06:00) Central Time', factor: 'GMT -6' },
      { name: 'America/Costa_Rica', utc: '(GMT-06:00) Costa Rica', factor: 'GMT -6' },
      { name: 'America/El_Salvador', utc: '(GMT-06:00) El Salvador', factor: 'GMT -6' },
      { name: 'America/Guatemala', utc: '(GMT-06:00) Guatemala', factor: 'GMT -6' },
      { name: 'America/Managua', utc: '(GMT-06:00) Managua', factor: 'GMT -6' },
      { name: 'America/Mexico_City', utc: '(GMT-06:00) Central Time - Mexico City', factor: 'GMT -6' },
      { name: 'America/Regina', utc: '(GMT-06:00) Central Time - Regina', factor: 'GMT -6' },
      { name: 'America/Tegucigalpa', utc: '(GMT-06:00) Central Time - Tegucigalpa', factor: 'GMT -6' },
      { name: 'America/Winnipeg', utc: '(GMT-06:00) Central Time - Winnipeg', factor: 'GMT -6' },
      { name: 'Pacific/Galapagos', utc: '(GMT-06:00) Galapagos', factor: 'GMT -6' },
      { name: 'America/Bogota', utc: '(GMT-05:00) Bogota', factor: 'GMT -5' },
      { name: 'America/Cancun', utc: '(GMT-05:00) America Cancun', factor: 'GMT -5' },
      { name: 'America/Cayman', utc: '(GMT-05:00) Cayman', factor: 'GMT -5' },
      { name: 'America/Guayaquil', utc: '(GMT-05:00) Guayaquil', factor: 'GMT -5' },
      { name: 'America/Havana', utc: '(GMT-05:00) Havana', factor: 'GMT -5' },
      { name: 'America/Iqaluit', utc: '(GMT-05:00) Eastern Time - Iqaluit', factor: 'GMT -5' },
      { name: 'America/Jamaica', utc: '(GMT-05:00) Jamaica', factor: 'GMT -5' },
      { name: 'America/Lima', utc: '(GMT-05:00) Lima', factor: 'GMT -5' },
      { name: 'America/Nassau', utc: '(GMT-05:00) Nassau', factor: 'GMT -5' },
      { name: 'America/New_York', utc: '(GMT-05:00) Eastern Time', factor: 'GMT -5' },
      { name: 'America/Panama', utc: '(GMT-05:00) Panama', factor: 'GMT -5' },
      { name: 'America/Port-au-Prince', utc: '(GMT-05:00) Port-au-Prince', factor: 'GMT -5' },
      { name: 'America/Rio_Branco', utc: '(GMT-05:00) Rio Branco', factor: 'GMT -5' },
      { name: 'America/Toronto', utc: '(GMT-05:00) Eastern Time - Toronto', factor: 'GMT -5' },
      { name: 'Pacific/Easter', utc: '(GMT-05:00) Easter Island', factor: 'GMT -5' },
      { name: 'America/Caracas', utc: '(GMT-04:30) Caracas', factor: 'GMT -4:30' },
      { name: 'America/Asuncion', utc: '(GMT-03:00) Asuncion', factor: 'GMT -3' },
      { name: 'America/Barbados', utc: '(GMT-04:00) Barbados', factor: 'GMT -4' },
      { name: 'America/Boa_Vista', utc: '(GMT-04:00) Boa Vista', factor: 'GMT -4' },
      { name: 'America/Campo_Grande', utc: '(GMT-03:00) Campo Grande', factor: 'GMT -3' },
      { name: 'America/Cuiaba', utc: '(GMT-03:00) Cuiaba', factor: 'GMT -3' },
      { name: 'America/Curacao', utc: '(GMT-04:00) Curacao', factor: 'GMT -4' },
      { name: 'America/Grand_Turk', utc: '(GMT-04:00) Grand Turk', factor: 'GMT -4' },
      { name: 'America/Guyana', utc: '(GMT-04:00) Guyana', factor: 'GMT -4' },
      { name: 'America/Halifax', utc: '(GMT-04:00) Atlantic Time - Halifax', factor: 'GMT -4' },
      { name: 'America/La_Paz', utc: '(GMT-04:00) La Paz', factor: 'GMT -4' },
      { name: 'America/Manaus', utc: '(GMT-04:00) Manaus', factor: 'GMT -4' },
      { name: 'America/Martinique', utc: '(GMT-04:00) Martinique', factor: 'GMT -4' },
      { name: 'America/Port_of_Spain', utc: '(GMT-04:00) Port of Spain', factor: 'GMT -4' },
      { name: 'America/Porto_Velho', utc: '(GMT-04:00) Porto Velho', factor: 'GMT -4' },
      { name: 'America/Puerto_Rico', utc: '(GMT-04:00) Puerto Rico', factor: 'GMT -4' },
      { name: 'America/Santo_Domingo', utc: '(GMT-04:00) Santo Domingo', factor: 'GMT -4' },
      { name: 'America/Thule', utc: '(GMT-04:00) Thule', factor: 'GMT -4' },
      { name: 'Atlantic/Bermuda', utc: '(GMT-04:00) Bermuda', factor: 'GMT -4' },
      { name: 'America/St_Johns', utc: '(GMT-03:30) Newfoundland Time - St. Johns', factor: 'GMT -3:30' },
      { name: 'America/Araguaina', utc: '(GMT-03:00) Araguaina', factor: 'GMT -3' },
      { name: 'America/Argentina/Buenos_Aires', utc: '(GMT-03:00) Buenos Aires', factor: 'GMT -3' },
      { name: 'America/Bahia', utc: '(GMT-03:00) Salvador', factor: 'GMT -3' },
      { name: 'America/Belem', utc: '(GMT-03:00) Belem', factor: 'GMT -3' },
      { name: 'America/Cayenne', utc: '(GMT-03:00) Cayenne', factor: 'GMT -3' },
      { name: 'America/Fortaleza', utc: '(GMT-03:00) Fortaleza', factor: 'GMT -3' },
      { name: 'America/Godthab', utc: '(GMT-03:00) Godthab', factor: 'GMT -3' },
      { name: 'America/Maceio', utc: '(GMT-03:00) Maceio', factor: 'GMT -3' },
      { name: 'America/Miquelon', utc: '(GMT-03:00) Miquelon', factor: 'GMT -3' },
      { name: 'America/Montevideo', utc: '(GMT-03:00) Montevideo', factor: 'GMT -3' },
      { name: 'America/Paramaribo', utc: '(GMT-03:00) Paramaribo', factor: 'GMT -3' },
      { name: 'America/Recife', utc: '(GMT-03:00) Recife', factor: 'GMT -3' },
      { name: 'America/Santiago', utc: '(GMT-03:00) Santiago', factor: 'GMT -3' },
      { name: 'America/Sao_Paulo', utc: '(GMT-02:00) Sao Paulo', factor: 'GMT -2' },
      { name: 'Antarctica/Palmer', utc: '(GMT-03:00) Palmer', factor: 'GMT -3' },
      { name: 'Antarctica/Rothera', utc: '(GMT-03:00) Rothera', factor: 'GMT -3' },
      { name: 'Atlantic/Stanley', utc: '(GMT-03:00) Stanley', factor: 'GMT -3' },
      { name: 'America/Noronha', utc: '(GMT-02:00) Noronha', factor: 'GMT -2' },
      { name: 'Atlantic/South_Georgia', utc: '(GMT-02:00) South Georgia', factor: 'GMT -2' },
      { name: 'America/Scoresbysund', utc: '(GMT-01:00) Scoresbysund', factor: 'GMT -1' },
      { name: 'Atlantic/Azores', utc: '(GMT-01:00) Azores', factor: 'GMT -1' },
      { name: 'Atlantic/Cape_Verde', utc: '(GMT-01:00) Cape Verde', factor: 'GMT -1' },
      { name: 'Africa/Abidjan', utc: '(GMT+00:00) Abidjan', factor: 'GMT +0' },
      { name: 'Africa/Accra', utc: '(GMT+00:00) Accra', factor: 'GMT +0' },
      { name: 'Africa/Bissau', utc: '(GMT+00:00) Bissau', factor: 'GMT +0' },
      { name: 'Africa/Casablanca', utc: '(GMT+00:00) Casablanca', factor: 'GMT +0' },
      { name: 'Africa/El_Aaiun', utc: '(GMT+00:00) El Aaiun', factor: 'GMT +0' },
      { name: 'Africa/Monrovia', utc: '(GMT+00:00) Monrovia', factor: 'GMT +0' },
      { name: 'America/Danmarkshavn', utc: '(GMT+00:00) Danmarkshavn', factor: 'GMT +0' },
      { name: 'Atlantic/Canary', utc: '(GMT+00:00) Canary Islands', factor: 'GMT +0' },
      { name: 'Atlantic/Faroe', utc: '(GMT+00:00) Faeroe', factor: 'GMT +0' },
      { name: 'Atlantic/Reykjavik', utc: '(GMT+00:00) Reykjavik', factor: 'GMT +0' },
      { name: 'Etc/GMT', utc: '(GMT+00:00) GMT (no daylight saving)', factor: 'GMT +0' },
      { name: 'Europe/Dublin', utc: '(GMT+00:00) Dublin', factor: 'GMT +0' },
      { name: 'Europe/Lisbon', utc: '(GMT+00:00) Lisbon', factor: 'GMT +0' },
      { name: 'Europe/London', utc: '(GMT+00:00) London', factor: 'GMT +0' },
      { name: 'Africa/Algiers', utc: '(GMT+01:00) Algiers', factor: 'GMT +1' },
      { name: 'Africa/Ceuta', utc: '(GMT+01:00) Ceuta', factor: 'GMT +1' },
      { name: 'Africa/Lagos', utc: '(GMT+01:00) Lagos', factor: 'GMT +1' },
      { name: 'Africa/Ndjamena', utc: '(GMT+01:00) Ndjamena', factor: 'GMT +1' },
      { name: 'Africa/Tunis', utc: '(GMT+01:00) Tunis', factor: 'GMT +1' },
      { name: 'Africa/Windhoek', utc: '(GMT+02:00) Windhoek', factor: 'GMT +2' },
      { name: 'Europe/Amsterdam', utc: '(GMT+01:00) Amsterdam', factor: 'GMT +1' },
      { name: 'Europe/Andorra', utc: '(GMT+01:00) Andorra', factor: 'GMT +1' },
      { name: 'Europe/Belgrade', utc: '(GMT+01:00) Central European Time - Belgrade', factor: 'GMT +1' },
      { name: 'Europe/Berlin', utc: '(GMT+01:00) Berlin', factor: 'GMT +1' },
      { name: 'Europe/Brussels', utc: '(GMT+01:00) Brussels', factor: 'GMT +1' },
      { name: 'Europe/Bratislava', utc: '(GMT+01:00) Bratislava', factor: 'GMT +1' },
      { name: 'Europe/Budapest', utc: '(GMT+01:00) Budapest', factor: 'GMT +1' },
      { name: 'Europe/Copenhagen', utc: '(GMT+01:00) Copenhagen', factor: 'GMT +1' },
      { name: 'Europe/Gibraltar', utc: '(GMT+01:00) Gibraltar', factor: 'GMT +1' },
      { name: 'Europe/Luxembourg', utc: '(GMT+01:00) Luxembourg', factor: 'GMT +1' },
      { name: 'Europe/Madrid', utc: '(GMT+01:00) Madrid', factor: 'GMT +1' },
      { name: 'Europe/Malta', utc: '(GMT+01:00) Malta', factor: 'GMT +1' },
      { name: 'Europe/Monaco', utc: '(GMT+01:00) Monaco', factor: 'GMT +1' },
      { name: 'Europe/Oslo', utc: '(GMT+01:00) Oslo', factor: 'GMT +1' },
      { name: 'Europe/Paris', utc: '(GMT+01:00) Paris', factor: 'GMT +1' },
      { name: 'Europe/Prague', utc: '(GMT+01:00) Central European Time - Prague', factor: 'GMT +1' },
      { name: 'Europe/Rome', utc: '(GMT+01:00) Rome', factor: 'GMT +1' },
      { name: 'Europe/Stockholm', utc: '(GMT+01:00) Stockholm', factor: 'GMT +1' },
      { name: 'Europe/Tirane', utc: '(GMT+01:00) Tirane', factor: 'GMT +1' },
      { name: 'Europe/Vienna', utc: '(GMT+01:00) Vienna', factor: 'GMT +1' },
      { name: 'Europe/Warsaw', utc: '(GMT+01:00) Warsaw', factor: 'GMT +1' },
      { name: 'Europe/Zurich', utc: '(GMT+01:00) Zurich', factor: 'GMT +1' },
      { name: 'Africa/Cairo', utc: '(GMT+02:00) Cairo', factor: 'GMT +2' },
      { name: 'Africa/Johannesburg', utc: '(GMT+02:00) Johannesburg', factor: 'GMT +2' },
      { name: 'Africa/Maputo', utc: '(GMT+02:00) Maputo', factor: 'GMT +2' },
      { name: 'Africa/Tripoli', utc: '(GMT+02:00) Tripoli', factor: 'GMT +2' },
      { name: 'Asia/Amman', utc: '(GMT+02:00) Amman', factor: 'GMT +2' },
      { name: 'Asia/Beirut', utc: '(GMT+02:00) Beirut', factor: 'GMT +2' },
      { name: 'Asia/Damascus', utc: '(GMT+02:00) Damascus', factor: 'GMT +2' },
      { name: 'Asia/Gaza', utc: '(GMT+02:00) Gaza', factor: 'GMT +2' },
      { name: 'Asia/Jerusalem', utc: '(GMT+02:00) Jerusalem', factor: 'GMT +2' },
      { name: 'Asia/Nicosia', utc: '(GMT+02:00) Nicosia', factor: 'GMT +2' },
      { name: 'Europe/Athens', utc: '(GMT+02:00) Athens', factor: 'GMT +2' },
      { name: 'Europe/Bucharest', utc: '(GMT+02:00) Bucharest', factor: 'GMT +2' },
      { name: 'Europe/Chisinau', utc: '(GMT+02:00) Chisinau', factor: 'GMT +2' },
      { name: 'Europe/Helsinki', utc: '(GMT+02:00) Helsinki', factor: 'GMT +2' },
      { name: 'Europe/Istanbul', utc: '(GMT+02:00) Istanbul', factor: 'GMT +2' },
      { name: 'Europe/Kaliningrad', utc: '(GMT+02:00) Moscow-01 - Kaliningrad', factor: 'GMT +2' },
      { name: 'Europe/Kiev', utc: '(GMT+02:00) Kiev', factor: 'GMT +2' },
      { name: 'Europe/Riga', utc: '(GMT+02:00) Riga', factor: 'GMT +2' },
      { name: 'Europe/Sofia', utc: '(GMT+02:00) Sofia', factor: 'GMT +2' },
      { name: 'Europe/Tallinn', utc: '(GMT+02:00) Tallinn', factor: 'GMT +2' },
      { name: 'Europe/Vilnius', utc: '(GMT+02:00) Vilnius', factor: 'GMT +2' },
      { name: 'Africa/Khartoum', utc: '(GMT+03:00) Khartoum', factor: 'GMT +3' },
      { name: 'Africa/Nairobi', utc: '(GMT+03:00) Nairobi', factor: 'GMT +3' },
      { name: 'Antarctica/Syowa', utc: '(GMT+03:00) Syowa', factor: 'GMT +3' },
      { name: 'Asia/Baghdad', utc: '(GMT+03:00) Baghdad', factor: 'GMT +3' },
      { name: 'Asia/Qatar', utc: '(GMT+03:00) Qatar', factor: 'GMT +3' },
      { name: 'Asia/Riyadh', utc: '(GMT+03:00) Riyadh', factor: 'GMT +3' },
      { name: 'Europe/Minsk', utc: '(GMT+03:00) Minsk', factor: 'GMT +3' },
      { name: 'Europe/Moscow', utc: '(GMT+03:00) Moscow+00 - Moscow', factor: 'GMT +3' },
      { name: 'Asia/Tehran', utc: '(GMT+03:30) Tehran', factor: 'GMT +3' },
      { name: 'Asia/Baku', utc: '(GMT+04:00) Baku', factor: 'GMT +4' },
      { name: 'Asia/Dubai', utc: '(GMT+04:00) Dubai', factor: 'GMT +4' },
      { name: 'Asia/Tbilisi', utc: '(GMT+04:00) Tbilisi', factor: 'GMT +4' },
      { name: 'Asia/Yerevan', utc: '(GMT+04:00) Yerevan', factor: 'GMT +4' },
      { name: 'Europe/Samara', utc: '(GMT+04:00) Moscow+01 - Samara', factor: 'GMT +4' },
      { name: 'Indian/Mahe', utc: '(GMT+04:00) Mahe', factor: 'GMT +4' },
      { name: 'Indian/Mauritius', utc: '(GMT+04:00) Mauritius', factor: 'GMT +4' },
      { name: 'Indian/Reunion', utc: '(GMT+04:00) Reunion', factor: 'GMT +4' },
      { name: 'Asia/Kabul', utc: '(GMT+04:30) Kabul', factor: 'GMT +4:30' },
      { name: 'Antarctica/Mawson', utc: '(GMT+05:00) Mawson', factor: 'GMT +5' },
      { name: 'Asia/Aqtau', utc: '(GMT+05:00) Aqtau', factor: 'GMT +5' },
      { name: 'Asia/Aqtobe', utc: '(GMT+05:00) Aqtobe', factor: 'GMT +5' },
      { name: 'Asia/Ashgabat', utc: '(GMT+05:00) Ashgabat', factor: 'GMT +5' },
      { name: 'Asia/Dushanbe', utc: '(GMT+05:00) Dushanbe', factor: 'GMT +5' },
      { name: 'Asia/Karachi', utc: '(GMT+05:00) Karachi', factor: 'GMT +5' },
      { name: 'Asia/Tashkent', utc: '(GMT+05:00) Tashkent', factor: 'GMT +5' },
      { name: 'Asia/Yekaterinburg', utc: '(GMT+05:00) Moscow+02 - Yekaterinburg', factor: 'GMT +5' },
      { name: 'Indian/Kerguelen', utc: '(GMT+05:00) Kerguelen', factor: 'GMT +5' },
      { name: 'Indian/Maldives', utc: '(GMT+05:00) Maldives', factor: 'GMT +5' },
      { name: 'Asia/Calcutta', utc: '(GMT+05:30) India Standard Time', factor: 'GMT +5:30' },
      { name: 'Asia/Colombo', utc: '(GMT+05:30) Colombo', factor: 'GMT +5:30' },
      { name: 'Asia/Katmandu', utc: '(GMT+05:45) Katmandu', factor: 'GMT +5:45' },
      { name: 'Antarctica/Vostok', utc: '(GMT+06:00) Vostok', factor: 'GMT +6' },
      { name: 'Asia/Almaty', utc: '(GMT+06:00) Almaty', factor: 'GMT +6' },
      { name: 'Asia/Bishkek', utc: '(GMT+06:00) Bishkek', factor: 'GMT +6' },
      { name: 'Asia/Dhaka', utc: '(GMT+06:00) Dhaka', factor: 'GMT +6' },
      { name: 'Asia/Omsk', utc: '(GMT+06:00) Moscow+03 - Omsk, Novosibirsk', factor: 'GMT +6' },
      { name: 'Asia/Thimphu', utc: '(GMT+06:00) Thimphu', factor: 'GMT +6' },
      { name: 'Indian/Chagos', utc: '(GMT+06:00) Chagos', factor: 'GMT +6' },
      { name: 'Asia/Rangoon', utc: '(GMT+06:30) Rangoon', factor: 'GMT +6:30' },
      { name: 'Indian/Cocos', utc: '(GMT+06:30) Cocos', factor: 'GMT +6:30' },
      { name: 'Antarctica/Davis', utc: '(GMT+07:00) Davis', factor: 'GMT +7' },
      { name: 'Asia/Bangkok', utc: '(GMT+07:00) Bangkok', factor: 'GMT +7' },
      { name: 'Asia/Hovd', utc: '(GMT+07:00) Hovd', factor: 'GMT +7' },
      { name: 'Asia/Jakarta', utc: '(GMT+07:00) Jakarta', factor: 'GMT +7' },
      { name: 'Asia/Krasnoyarsk', utc: '(GMT+07:00) Moscow+04 - Krasnoyarsk', factor: 'GMT +7' },
      { name: 'Asia/Saigon', utc: '(GMT+07:00) Hanoi', factor: 'GMT +7' },
      { name: 'Asia/Ho_Chi_Minh', utc: '(GMT+07:00) Ho Chi Minh', factor: 'GMT +7' },
      { name: 'Indian/Christmas', utc: '(GMT+07:00) Christmas', factor: 'GMT +7' },
      { name: 'Antarctica/Casey', utc: '(GMT+08:00) Casey', factor: 'GMT +8' },
      { name: 'Asia/Brunei', utc: '(GMT+08:00) Brunei', factor: 'GMT +8' },
      { name: 'Asia/Choibalsan', utc: '(GMT+08:00) Choibalsan', factor: 'GMT +8' },
      { name: 'Asia/Hong_Kong', utc: '(GMT+08:00) Hong Kong', factor: 'GMT +8' },
      { name: 'Asia/Irkutsk', utc: '(GMT+08:00) Moscow+05 - Irkutsk', factor: 'GMT +8' },
      { name: 'Asia/Kuala_Lumpur', utc: '(GMT+08:00) Kuala Lumpur', factor: 'GMT +8' },
      { name: 'Asia/Macau', utc: '(GMT+08:00) Macau', factor: 'GMT +8' },
      { name: 'Asia/Makassar', utc: '(GMT+08:00) Makassar', factor: 'GMT +8' },
      { name: 'Asia/Manila', utc: '(GMT+08:00) Manila', factor: 'GMT +8' },
      { name: 'Asia/Shanghai', utc: '(GMT+08:00) China Time - Beijing', factor: 'GMT +8' },
      { name: 'Asia/Singapore', utc: '(GMT+08:00) Singapore', factor: 'GMT +8' },
      { name: 'Asia/Taipei', utc: '(GMT+08:00) Taipei', factor: 'GMT +8' },
      { name: 'Asia/Ulaanbaatar', utc: '(GMT+08:00) Ulaanbaatar', factor: 'GMT +8' },
      { name: 'Australia/Perth', utc: '(GMT+08:00) Western Time - Perth', factor: 'GMT +8' },
      { name: 'Asia/Pyongyang', utc: '(GMT+08:30) Pyongyang', factor: 'GMT +8:30' },
      { name: 'Asia/Dili', utc: '(GMT+09:00) Dili', factor: 'GMT +9' },
      { name: 'Asia/Jayapura', utc: '(GMT+09:00) Jayapura', factor: 'GMT +9' },
      { name: 'Asia/Seoul', utc: '(GMT+09:00) Seoul', factor: 'GMT +9' },
      { name: 'Asia/Tokyo', utc: '(GMT+09:00) Tokyo', factor: 'GMT +9' },
      { name: 'Asia/Yakutsk', utc: '(GMT+09:00) Moscow+06 - Yakutsk', factor: 'GMT +9' },
      { name: 'Pacific/Palau', utc: '(GMT+09:00) Palau', factor: 'GMT +9' },
      { name: 'Australia/Adelaide', utc: '(GMT+10:30) Central Time - Adelaide', factor: 'GMT +9' },
      { name: 'Australia/Darwin', utc: '(GMT+09:30) Central Time - Darwin', factor: 'GMT +9' },
      { name: 'Antarctica/DumontDUrville', utc: "(GMT+10:00) Dumont D'Urville", factor: 'GMT +10' },
      { name: 'Asia/Magadan', utc: '(GMT+10:00) Moscow+07 - Magadan', factor: 'GMT +10' },
      { name: 'Asia/Vladivostok', utc: '(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk', factor: 'GMT +10' },
      { name: 'Australia/Brisbane', utc: '(GMT+10:00) Eastern Time - Brisbane', factor: 'GMT +10' },
      { name: 'Australia/Hobart', utc: '(GMT+11:00) Eastern Time - Hobart', factor: 'GMT +10' },
      { name: 'Australia/Sydney', utc: '(GMT+11:00) Eastern Time - Melbourne, Sydney', factor: 'GMT +10' },
      { name: 'Pacific/Chuuk', utc: '(GMT+10:00) Truk', factor: 'GMT +10' },
      { name: 'Pacific/Guam', utc: '(GMT+10:00) Guam', factor: 'GMT +10' },
      { name: 'Pacific/Port_Moresby', utc: '(GMT+10:00) Port Moresby', factor: 'GMT +10' },
      { name: 'Pacific/Efate', utc: '(GMT+11:00) Efate', factor: 'GMT +11' },
      { name: 'Pacific/Guadalcanal', utc: '(GMT+11:00) Guadalcanal', factor: 'GMT +11' },
      { name: 'Pacific/Kosrae', utc: '(GMT+11:00) Kosrae', factor: 'GMT +11' },
      { name: 'Pacific/Norfolk', utc: '(GMT+11:00) Norfolk', factor: 'GMT +11' },
      { name: 'Pacific/Noumea', utc: '(GMT+11:00) Noumea', factor: 'GMT +11' },
      { name: 'Pacific/Pohnpei', utc: '(GMT+11:00) Ponape', factor: 'GMT +11' },
      { name: 'Asia/Kamchatka', utc: '(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy', factor: 'GMT +12' },
      { name: 'Pacific/Auckland', utc: '(GMT+13:00) Auckland', factor: 'GMT +13' },
      { name: 'Pacific/Fiji', utc: '(GMT+13:00) Fiji', factor: 'GMT +13' },
      { name: 'Pacific/Funafuti', utc: '(GMT+12:00) Funafuti', factor: 'GMT +12' },
      { name: 'Pacific/Kwajalein', utc: '(GMT+12:00) Kwajalein', factor: 'GMT +12' },
      { name: 'Pacific/Majuro', utc: '(GMT+12:00) Majuro', factor: 'GMT +12' },
      { name: 'Pacific/Nauru', utc: '(GMT+12:00) Nauru', factor: 'GMT +12' },
      { name: 'Pacific/Tarawa', utc: '(GMT+12:00) Tarawa', factor: 'GMT +12' },
      { name: 'Pacific/Wake', utc: '(GMT+12:00) Wake', factor: 'GMT +12' },
      { name: 'Pacific/Wallis', utc: '(GMT+12:00) Wallis', factor: 'GMT +12' },
      { name: 'Pacific/Apia', utc: '(GMT+14:00) Apia', factor: 'GMT +14' },
      { name: 'Pacific/Enderbury', utc: '(GMT+13:00) Enderbury', factor: 'GMT +13' },
      { name: 'Pacific/Fakaofo', utc: '(GMT+13:00) Fakaofo', factor: 'GMT +13' },
      { name: 'Pacific/Tongatapu', utc: '(GMT+13:00) Tongatapu', factor: 'GMT +13' },
      { name: 'Pacific/Kiritimati', utc: '(GMT+14:00) Kiritimati', factor: 'GMT +14' }
    ])
  }
}
