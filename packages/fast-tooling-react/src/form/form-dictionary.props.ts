import { AbstractControlTemplateProps } from "./templates";
import { FormChildOptionItem } from "./form.props";

export interface FormDictionaryProps extends AbstractControlTemplateProps {
    /**
     * The possible child options
     */
    childOptions: FormChildOptionItem[];

    /**
     * A list of enumerated properties that should be excluded from
     * the dictionary
     */
    enumeratedProperties: string[];

    /**
     * An array of example data
     */
    examples: any[];

    /**
     * A label for the dictionary property key
     */
    propertyLabel: string;

    /**
     * The additional properties in JSON schema
     */
    additionalProperties: any;
}

export interface FormDictionaryState {
    /**
     * The current property key being edited
     */
    focusedPropertyKey: string | null;

    /**
     * The current property key value
     */
    focusedPropertyKeyValue: string | null;
}