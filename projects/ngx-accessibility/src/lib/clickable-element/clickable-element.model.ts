export interface ClickableElementOptions {
    skipTabIndex?: boolean;
    skipRoleAttribute?: boolean;
    skipEnterKey?: boolean;
    skipSpaceKey?: boolean;
    customCharaters?: string[];
}

export enum ClickKeyboardKeysIndecies {
    enter = 0,
    space = 1
}

export enum ClickKeyboardKeys {
    enter = 'Enter',
    space = ' '
}