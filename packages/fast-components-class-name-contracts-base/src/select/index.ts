/**
 * The class name contract for the select component
 */
export interface SelectClassNameContract {
    /**
     * The root of the select component
     */
    select?: string;

    /**
     * The disabled modifier
     */
    select__disabled?: string;

    /**
     * The menu of the select component
     */
    select_menu?: string;

    /**
     * The menu open modifier
     */
    select_menu__open?: string;

    /**
     * The multi select modifier
     */
    select__multiSelectable?: string;

    /**
     * left positioner horizontal state
     */
    select__menuPositionLeft?: string;

    /**
     * right positioner horizontal state
     */
    select__menuPositionRight?: string;

    /**
     * top positioner vertical state
     */
    select__menuPositionTop?: string;

    /**
     * bottom positioner vertical state
     */
    select__menuPositionBottom?: string;

    /**
     * horizontal flip inward state
     */
    select__menuPositionHorizontalInset?: string;

    /**
     * vertical flip inward state
     */
    select__menuPositionVerticalInset?: string;
}
