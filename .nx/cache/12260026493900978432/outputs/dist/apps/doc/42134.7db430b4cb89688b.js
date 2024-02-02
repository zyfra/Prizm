'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42134],
  {
    42134: n => {
      n.exports =
        ':host {\n  .container {\n    display: flex;\n    flex-direction: column;\n\n    .toggle-container {\n      padding: 0 24px;\n      display: flex;\n      align-items: center;\n    }\n\n    .content {\n      padding: 8px;\n\n      display: flex;\n      gap: 8px;\n      flex: 1;\n\n      background: var(--prizm-v3-background-fill-primary);\n\n      overflow: hidden;\n\n      &__inner {\n        flex: 1;\n\n        border: 1px solid var(--prizm-v3-background-stroke);\n        border-radius: 2px;\n\n        filter: drop-shadow(0 2px 4px var(--prizm-v3-shadow-color));\n\n        overflow: hidden;\n      }\n\n      .side-menu {\n        height: auto;\n        width: 400px;\n\n        display: flex;\n        flex-direction: column;\n\n        border: 1px solid var(--prizm-v3-background-stroke);\n        background: var(--prizm-v3-background-fill-secondary);\n\n        .header {\n          height: 48px;\n          width: 100%;\n        }\n\n        &__content {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex: 1;\n\n          overflow: hidden;\n\n          &_empty {\n            padding: 40px;\n          }\n\n          .input {\n            height: 100%;\n            padding: 8px;\n\n            display: flex;\n            flex: 1;\n          }\n\n          .empty-message {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n\n            gap: 16px;\n\n            font-size: 14px;\n            line-height: 20px;\n            text-align: center;\n\n            &__main {\n              font-weight: 600;\n\n              color: var(--prizm-v3-text-icon-primary);\n              text-align: center;\n            }\n\n            &__sub {\n              font-weight: 400;\n\n              color: var(--prizm-v3-text-icon-tertiary);\n            }\n          }\n        }\n\n        .instruments {\n          display: flex;\n          align-items: center;\n\n          &__group {\n            min-height: 24px;\n            padding: 0 15px;\n\n            display: flex;\n            gap: 10px;\n\n            border-right: 1px solid var(--prizm-v3-background-stroke);\n\n            &:last-child {\n              border: none;\n            }\n          }\n\n          &__icon {\n            height: 24px;\n            width: 24px;\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            font-size: 16px;\n            line-height: 16px;\n            color: #8d91a4;\n\n            cursor: pointer;\n\n            &:hover {\n              color: #337eff;\n            }\n          }\n        }\n      }\n    }\n\n    .content_column {\n      flex-direction: column;\n\n      .side-menu {\n        height: 200px;\n        width: 100%;\n      }\n    }\n  }\n}\n';
    },
  },
]);
