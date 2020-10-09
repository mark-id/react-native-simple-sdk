/**
 * DEFAULT MARKID BASE DOMAIN
 */
const DefaultMarkIdDomain = 'https://markid.eu';

/**
 * MARKID API SIMPLIFIED WIDGET IDENTIFICATION INITIATION ENDPOINT
 * THIS ENDPOINT HAS TO BE CALLED BEFORE ANY OTHER
 */
export const HostUrl = `${DefaultMarkIdDomain}/api/identity/simple-init`;

/**
 * MARKID API SIMPLIFIED WIDGET STEPS ENDPOINT
 * USE THIS ENDPOINT FOR POSTING DATA
 */
export const StepsUrl = `${DefaultMarkIdDomain}/api/identity/simple_step_action`;

/**
 * MARKID API SIMPLIFIED WIDGET FINISH ENDPOINT
 * USE THIS ENDPOINT FOR FINALIZING REQUEST
 */
export const StepFinishUrl = `${DefaultMarkIdDomain}/api/identity/simple_ident_finish`;

/**
 * PLEASE PROVIDE YOUR IDENTIFICATION DATA HERE
 * 
 * TO VIEW REQUIRED PARAMETERS, PLEASE REFER TO https://markid.eu/api/doc
 * IF YOU DO NOT HAVE TOKEN, YOU CAN OBTAIN ONE HERE: https://markid.eu/token
 * 
 * IF YOU WISH TO ADD ADDITIONAL PARAMETERS TO THE WIDGET, YOU MAY DO SO INSIDE 'params'
 * IN THAT CASE, MAKE SURE TO ADD DESIRED PARAMETERS TO THE MarkIdInitializationUrl
 */
const MarkIdSimpleWidget = {
    'token': 'f4b79b72-7587-f417-41f8-2de5a7c87fae',
    'name': '',
    'surname': '',
    'personcode': '',
    'birthday': '',
    'peps': '',
    'sanctions': '',
}

/**
 * IF YOU HAVE ADDED ADDITIONAL PARAMETERS TO THE WIDGET ABOVE,
 * MAKE SURE TO ACCORDINGLY MODIFY THIS URL BELOW
 */
export const MarkIdInitializationUrl = 
    HostUrl +
    "?token=" + MarkIdSimpleWidget.token +
    "&name=" + MarkIdSimpleWidget.name +
    "&surname=" + MarkIdSimpleWidget.surname +
    "&personcode=" + MarkIdSimpleWidget.personcode +
    "&birthday=" + MarkIdSimpleWidget.birthday +
    "&peps=" + MarkIdSimpleWidget.peps + 
    "&sanctions=" + MarkIdSimpleWidget.sanctions + 
    "&source=api_widget";
