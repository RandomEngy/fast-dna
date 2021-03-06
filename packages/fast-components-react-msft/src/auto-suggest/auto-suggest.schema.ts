export default {
    $schema: "http://json-schema.org/schema#",
    title: "Auto suggest",
    description: "An auto suggest component's schema definition.",
    type: "object",
    id: "@microsoft/fast-components-react-msft/auto-suggest",
    properties: {
        placeholder: {
            title: "Placeholder",
            type: "string",
        },
        disabled: {
            title: "Disabled",
            type: "boolean",
        },
        isMenuOpen: {
            title: "Is menu open",
            type: "boolean",
        },
        initialValue: {
            title: "Initial value",
            type: "string",
        },
        value: {
            title: "Value",
            type: "string",
        },
        label: {
            title: "Label",
            type: "string",
        },
        listboxId: {
            title: "Listbox Id",
            type: "string",
        },
    },
    reactProperties: {
        children: {
            title: "Building blocks",
            type: "children",
            defaults: ["text"],
        },
    },
    required: ["listboxId"],
};
