'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [5816],
  {
    5816: (co, d, a) => {
      a.r(d), a.d(d, { AstModule: () => po });
      var Cn = a(96814),
        u = a(21004),
        vn = a(75187),
        e = a(65879),
        s = a(8221),
        wn = a(63796),
        Tn = a(75987),
        Pn = a(43015),
        t = a(41716);
      const O = [
          {
            selector: 'zyfra-accordion',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-accordion' })],
            inputs: {
              styleClass: [(0, t.rO)(t.Bp, {})],
              expandIcon: [(0, t.rO)(t.Bp, {})],
              collapseIcon: [(0, t.rO)(t.Bp, {})],
              multiple: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              activeIndexChange: [(0, t.rO)(t.Bp, {})],
              onClose: [(0, t.rO)(t.Bp, {})],
              onOpen: [(0, t.rO)(t.Bp, {})],
            },
          },
          {
            selector: 'zyfra-accordion-tab',
            tasks: [
              (0, t.rO)(t.Uw, { name: 'prizm-accordion-item' }),
              (0, t.rO)(t.vf, { name: 'ng-template', attrs: { prizmAccordionContent: null }, children: [] }),
            ],
            inputs: {
              header: [(0, t.rO)(t.Yh, { newAttrName: 'title' })],
              isExpanded: [(0, t.rO)(t.Yh, { newAttrName: 'selected' })],
              cache: [(0, t.rO)(t.Bp, {})],
              transitionOptions: [(0, t.rO)(t.Bp, {})],
            },
            outputs: { selectedChange: [(0, t.rO)(t.Yh, { newAttrName: 'isExpandedChange' })] },
          },
        ],
        h = [
          {
            selector: 'zyfra-breadcrumb',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-breadcrumbs' })],
            inputs: {
              styleClass: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              home: [(0, t.rO)(t.Bp, {})],
              items: [(0, t.rO)(t.Yh, { newAttrName: 'breadcrumbs', needFixApi: !0 })],
            },
            outputs: { onItemClick: [(0, t.rO)(t.Yh, { newAttrName: 'breadcrumbChange', needFixApi: !0 })] },
          },
        ],
        f = [
          {
            selector: 'zyfra-button',
            tasks: [(0, t.rO)(t.Uw, { name: 'button' }), (0, t.rO)(t.LZ, { attr: 'prizmButton' })],
            inputs: {
              label: [(0, t.rO)(t.Ff, {})],
              iconPos: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              badge: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onBlur: [(0, t.rO)(t.Yh, { newAttrName: 'blur' })],
              onFocus: [(0, t.rO)(t.Yh, { newAttrName: 'focus' })],
              onClick: [(0, t.rO)(t.Yh, { newAttrName: 'click' })],
            },
          },
        ],
        c = [
          {
            selector: 'zyfra-checkbox',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-checkbox' })],
            inputs: {
              binary: [(0, t.rO)(t.Yh, { newAttrName: 'checked' })],
              label: [(0, t.rO)(t.Ff, {})],
              disabledControl: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
              value: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
              ariaLabel: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              labelStyleClass: [(0, t.rO)(t.Bp, {})],
              checkboxIcon: [(0, t.rO)(t.Bp, {})],
              readonly: [(0, t.rO)(t.Bp, {})],
              required: [(0, t.rO)(t.Bp, {})],
              trueValue: [(0, t.rO)(t.Bp, {})],
              falseValue: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {},
          },
        ],
        z =
          ((0, t.rO)(t.Uw, { name: 'prizm-chips-item' }),
          (0, t.rO)(t.Ff, {}),
          (0, t.rO)(t.Yh, { newAttrName: 'deletable' }),
          (0, t.rO)(t.Bp, {}),
          (0, t.rO)(t.Bp, {}),
          (0, t.rO)(t.Bp, {}),
          (0, t.rO)(t.Bp, {}),
          (0, t.rO)(t.Bp, {}),
          (0, t.rO)(t.Yh, { newAttrName: 'deleted' }),
          [
            {
              selector: 'zyfra-dropdown',
              tasks: [(0, t.rO)(t.Uw, { name: 'prizm-select' })],
              inputs: {
                options: [(0, t.rO)(t.Yh, { newAttrName: 'items', needFixApi: !0 })],
                dropdownIcon: [(0, t.rO)(t.Yh, { newAttrName: 'icon', needFixApi: !0 })],
                showClear: [(0, t.rO)(t.Yh, { newAttrName: 'forceClear' })],
                optionValue: [(0, t.rO)(t.Bp, {})],
                optionLabel: [(0, t.rO)(t.Bp, {})],
                optionDisabled: [(0, t.rO)(t.Bp, {})],
                optionGroupLabel: [(0, t.rO)(t.Bp, {})],
                optionGroupChildren: [(0, t.rO)(t.Bp, {})],
                name: [(0, t.rO)(t.Bp, {})],
                scrollHeight: [(0, t.rO)(t.Bp, {})],
                style: [(0, t.rO)(t.Bp, {})],
                panelStyle: [(0, t.rO)(t.Bp, {})],
                styleClass: [(0, t.rO)(t.Bp, {})],
                panelStyleClass: [(0, t.rO)(t.Bp, {})],
                filter: [(0, t.rO)(t.Bp, {})],
                filterValue: [(0, t.rO)(t.Bp, {})],
                filterBy: [(0, t.rO)(t.Bp, {})],
                filterMatchMode: [(0, t.rO)(t.Bp, {})],
                filterPlaceholder: [(0, t.rO)(t.Bp, {})],
                filterLocale: [(0, t.rO)(t.Bp, {})],
                required: [(0, t.rO)(t.Bp, {})],
                disabled: [(0, t.rO)(t.Bp, {})],
                readonly: [(0, t.rO)(t.Bp, {})],
                emptyMessage: [(0, t.rO)(t.Bp, {})],
                emptyFilterMessage: [(0, t.rO)(t.Bp, {})],
                ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
                editable: [(0, t.rO)(t.Bp, {})],
                maxlength: [(0, t.rO)(t.Bp, {})],
                appendTo: [(0, t.rO)(t.Bp, {})],
                tabindex: [(0, t.rO)(t.Bp, {})],
                inputId: [(0, t.rO)(t.Bp, {})],
                dataKey: [(0, t.rO)(t.Bp, {})],
                autofocus: [(0, t.rO)(t.Bp, {})],
                autofocusFilter: [(0, t.rO)(t.Bp, {})],
                resetFilterOnHide: [(0, t.rO)(t.Bp, {})],
                autoDisplayFirst: [(0, t.rO)(t.Bp, {})],
                group: [(0, t.rO)(t.Bp, {})],
                groupTemplateClass: [(0, t.rO)(t.Bp, {})],
              },
              outputs: {
                onChange: [(0, t.rO)(t.Bp, {})],
                onFocus: [(0, t.rO)(t.Bp, {})],
                onBlur: [(0, t.rO)(t.Bp, {})],
                onShow: [(0, t.rO)(t.Bp, {})],
                onHide: [(0, t.rO)(t.Bp, {})],
                onFilter: [(0, t.rO)(t.Bp, {})],
                onClick: [(0, t.rO)(t.Yh, { newAttrName: 'click' })],
              },
            },
          ]),
        y = [
          {
            selector: 'zyfra-toggle-button',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-toggle' })],
            inputs: {
              onLabel: [(0, t.rO)(t.Bp, { extraComment: 'TODO onLabel need set before this component' })],
              offLabel: [(0, t.rO)(t.Bp, { extraComment: 'TODO offLabel need set before this component' })],
              disabled: [(0, t.rO)(t.Bp, { extraComment: 'TODO disabled need pass with FormControl' })],
              onIcon: [(0, t.rO)(t.Yh, { newAttrName: 'iconOn' })],
              offIcon: [(0, t.rO)(t.Yh, { newAttrName: 'iconOff' })],
              ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              iconPos: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {},
          },
        ],
        g = [
          {
            selector: 'zyfra-tab-view',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-tabs' })],
            inputs: {
              activeIndex: [(0, t.rO)(t.Yh, { newAttrName: 'activeTabIndex' })],
              controlClose: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              activeIndexChange: [(0, t.rO)(t.Yh, { newAttrName: 'activeTabIndexChange' })],
              onClose: [(0, t.rO)(t.Bp, {})],
              onChange: [(0, t.rO)(t.Bp, {})],
            },
          },
          {
            selector: 'zyfra-tab-panel',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-tab' }), (0, t.rO)(t.b_, {})],
            inputs: {
              header: [(0, t.rO)(t.Ff, { notClearChildren: !0 })],
              tooltip: [(0, t.rO)(t.Yh, { newAttrName: 'prizmTooltip' })],
              tooltipPosition: [(0, t.rO)(t.Yh, { newAttrName: 'prizmHintDirection', needFixApi: !0 })],
              selected: [(0, t.rO)(t.Bp, {})],
              headerStyle: [(0, t.rO)(t.Bp, {})],
              headerStyleClass: [(0, t.rO)(t.Bp, {})],
              cache: [(0, t.rO)(t.Bp, {})],
              leftIcon: [(0, t.rO)(t.Bp, {})],
              rightIcon: [(0, t.rO)(t.Bp, {})],
              tooltipStyleClass: [(0, t.rO)(t.Bp, {})],
              tooltipPositionStyle: [(0, t.rO)(t.Bp, {})],
            },
            outputs: { propChange: [(0, t.rO)(t.Bp, {})] },
          },
        ],
        x = [
          {
            selector: 'zyfra-split-button',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-split-button' })],
            inputs: {
              label: [(0, t.rO)(t.Ff, {})],
              icon: [(0, t.rO)(t.gV, { comment: 'TODO need fix api for pass right icon' })],
              iconPos: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              menuStyle: [(0, t.rO)(t.Bp, {})],
              menuStyleClass: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              appendTo: [(0, t.rO)(t.Bp, {})],
              dir: [(0, t.rO)(t.Bp, {})],
              showTransitionOptions: [(0, t.rO)(t.Bp, {})],
              hideTransitionOptions: [(0, t.rO)(t.Bp, {})],
              model: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO use dropdown-host component to show children menus' }),
              ],
            },
            outputs: {
              onDropdownClick: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, {
                  comment: 'TODO use dropdown-host component to catch event for change (onDropdownClick)',
                }),
              ],
              onClick: [
                (0, t.rO)(t.LZ, { attr: '(clickIcon)', passValue: !0 }),
                (0, t.rO)(t.Yh, { newAttrName: 'clickButton' }),
              ],
            },
          },
        ],
        b = [
          {
            selector: 'zyfra-spinner',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-spinner' })],
            inputs: {
              size: [
                (0, t.rO)(t.Yh, { needFixApi: !0, newAttrName: 'size', setExactNewAttrName: !0, value: 'l' }),
              ],
              styleClass: [(0, t.rO)(t.Bp, {})],
              strokeWidth: [(0, t.rO)(t.Bp, {})],
              fill: [(0, t.rO)(t.Bp, {})],
              animationDuration: [(0, t.rO)(t.Bp, {})],
              color: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {},
          },
        ],
        B = [
          {
            selector: 'zyfra-radio-button',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-radio-button' })],
            inputs: {
              formControl: [(0, t.rO)(t.Bp, {})],
              formControlName: [(0, t.rO)(t.Bp, {})],
              labelStyleClass: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              ariaLabel: [(0, t.rO)(t.Bp, {})],
              ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onClick: [(0, t.rO)(t.Yh, { newAttrName: 'clickEvent' })],
              onBlur: [(0, t.rO)(t.Yh, { newAttrName: 'blurEvent' })],
              onFocus: [(0, t.rO)(t.Yh, { newAttrName: 'focusEvent' })],
            },
          },
        ],
        A = [
          {
            selector: 'zyfra-multiselect',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-multi-select' })],
            inputs: {
              options: [(0, t.rO)(t.Yh, { newAttrName: 'items', needFixApi: !0 })],
              dropdownIcon: [(0, t.rO)(t.Yh, { newAttrName: 'icon', needFixApi: !0 })],
              showClear: [(0, t.rO)(t.Yh, { newAttrName: 'forceClear' })],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              panelStyle: [(0, t.rO)(t.Bp, {})],
              panelStyleClass: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              disabled: [(0, t.rO)(t.Bp, {})],
              readonly: [(0, t.rO)(t.Bp, {})],
              group: [(0, t.rO)(t.Bp, {})],
              filter: [(0, t.rO)(t.Bp, {})],
              filterPlaceHolder: [(0, t.rO)(t.Bp, {})],
              filterLocale: [(0, t.rO)(t.Bp, {})],
              filterValue: [(0, t.rO)(t.Bp, {})],
              overlayVisible: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              appendTo: [(0, t.rO)(t.Bp, {})],
              dataKey: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
              ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
              displaySelectedLabel: [(0, t.rO)(t.Bp, {})],
              maxSelectedLabels: [(0, t.rO)(t.Bp, {})],
              selectionLimit: [(0, t.rO)(t.Bp, {})],
              selectedItemsLabel: [(0, t.rO)(t.Bp, {})],
              showToggleAll: [(0, t.rO)(t.Bp, {})],
              emptyFilterMessage: [(0, t.rO)(t.Bp, {})],
              emptyMessage: [(0, t.rO)(t.Bp, {})],
              resetFilterOnHide: [(0, t.rO)(t.Bp, {})],
              optionLabel: [(0, t.rO)(t.Bp, {})],
              optionValue: [(0, t.rO)(t.Bp, {})],
              optionDisabled: [(0, t.rO)(t.Bp, {})],
              optionGroupLabel: [(0, t.rO)(t.Bp, {})],
              optionGroupChildren: [(0, t.rO)(t.Bp, {})],
              showHeader: [(0, t.rO)(t.Bp, {})],
              autoZIndex: [(0, t.rO)(t.Bp, {})],
              baseZIndex: [(0, t.rO)(t.Bp, {})],
              filterBy: [(0, t.rO)(t.Bp, {})],
              virtualScroll: [(0, t.rO)(t.Bp, {})],
              itemSize: [(0, t.rO)(t.Bp, {})],
              showTransitionOptions: [(0, t.rO)(t.Bp, {})],
              hideTransitionOptions: [(0, t.rO)(t.Bp, {})],
              ariaFilterLabel: [(0, t.rO)(t.Bp, {})],
              filterMatchMode: [(0, t.rO)(t.Bp, {})],
              tooltip: [(0, t.rO)(t.Bp, {})],
              tooltipPosition: [(0, t.rO)(t.Bp, {})],
              tooltipPositionStyle: [(0, t.rO)(t.Bp, {})],
              tooltipStyleClass: [(0, t.rO)(t.Bp, {})],
              autofocusFilter: [(0, t.rO)(t.Bp, {})],
              display: [(0, t.rO)(t.Bp, {})],
              scrollHeight: [(0, t.rO)(t.Bp, {})],
              defaultLabel: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onChange: [(0, t.rO)(t.Bp, {})],
              onFocus: [(0, t.rO)(t.Bp, {})],
              onBlur: [(0, t.rO)(t.Bp, {})],
              onPanelShow: [(0, t.rO)(t.Bp, {})],
              onPanelHide: [(0, t.rO)(t.Bp, {})],
              onClick: [(0, t.rO)(t.Yh, { newAttrName: 'click' })],
            },
          },
        ],
        C = [
          {
            selector: 'zyfra-input-switch',
            tasks: [(0, t.rO)(t.Uw, { name: 'prizm-toggle' })],
            inputs: {
              disabled: [
                (0, t.rO)(t.Bp, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: for pass disabled use pass by FormControl ' }),
              ],
              readonly: [
                (0, t.rO)(t.Bp, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: for pass readonly use pass by FormControl ' }),
              ],
              mini: [(0, t.rO)(t.Yh, { newAttrName: 'size', setExactNewAttrName: !0, value: 'm' })],
              ariaLabelledBy: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {},
          },
        ],
        m = 'prizm-input-layout',
        v = [m, 'placeholder'].join('::'),
        w = [m, 'ngModel'].join('::'),
        In = [m, 'formControl'].join('::'),
        T = [m, 'formControlName'].join('::'),
        P = [m, 'type'].join('::'),
        N = [m, 'disabled'].join('::'),
        I = [
          {
            selector: 'zyfra-input',
            tasks: [
              (0, t.rO)(t.Uw, { name: m }),
              (0, t.rO)(t.Rn, { name: 'input', attrs: { prizmInput: null }, voidElement: !0, children: [] }),
            ],
            inputs: {
              disabled: [(0, t.rO)(t.cR, { id: N, action: (0, t.rO)(t.Yh, { newAttrName: 'disabled' }) })],
              type: [(0, t.rO)(t.cR, { id: P, action: (0, t.rO)(t.Yh, { newAttrName: 'type' }) })],
              formControlName: [
                (0, t.rO)(t.cR, { id: T, action: (0, t.rO)(t.Yh, { newAttrName: 'formControlName' }) }),
              ],
              ngModel: [(0, t.rO)(t.cR, { id: w, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) })],
              placeholder: [
                (0, t.rO)(t.cR, { id: v, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
              ],
              value: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a value size to child ' }),
              ],
              step: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a step size to child ' }),
              ],
              min: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a min value to child ' }),
              ],
              max: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a max value to child ' }),
              ],
              dropdownIcon: [(0, t.rO)(t.Yh, { newAttrName: 'icon', needFixApi: !0 })],
              showClear: [(0, t.rO)(t.Yh, { newAttrName: 'forceClear' })],
              tooltipPosition: [(0, t.rO)(t.Bp, {})],
              tooltip: [(0, t.rO)(t.Bp, {})],
              format: [(0, t.rO)(t.Bp, {})],
              showButtons: [(0, t.rO)(t.Bp, {})],
              buttonLayout: [(0, t.rO)(t.Bp, {})],
              spanClass: [(0, t.rO)(t.Bp, {})],
              iClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonClass: [(0, t.rO)(t.Bp, {})],
              decrementButtonClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              decrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              locale: [(0, t.rO)(t.Bp, {})],
              localeMatcher: [(0, t.rO)(t.Bp, {})],
              mode: [(0, t.rO)(t.Bp, {})],
              prefix: [(0, t.rO)(t.Bp, {})],
              suffix: [(0, t.rO)(t.Bp, {})],
              currency: [(0, t.rO)(t.Bp, {})],
              currencyDisplay: [(0, t.rO)(t.Bp, {})],
              useGrouping: [(0, t.rO)(t.Bp, {})],
              minFractionDigits: [(0, t.rO)(t.Bp, {})],
              maxFractionDigits: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              inputStyle: [(0, t.rO)(t.Bp, {})],
              inputStyleClass: [(0, t.rO)(t.Bp, {})],
              maxlength: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              title: [(0, t.rO)(t.Bp, {})],
              ariaLabel: [(0, t.rO)(t.Bp, {})],
              ariaRequired: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
              autocomplete: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onInput: [(0, t.rO)(t.tP, {})],
              onBlur: [(0, t.rO)(t.tP, {})],
              onFocus: [(0, t.rO)(t.tP, {})],
            },
            finishTasks: [
              (0, t.rO)(t.dj, {
                dontRunOnOnMain: !0,
                runOnChildren: !0,
                tasks: [
                  {
                    selector: [{ type: 'byAttr', attrs: { prizmInput: void 0 } }],
                    inputs: {},
                    outputs: {},
                    tasks: [(0, t.rO)(t.wn, { id: [v, w, In, T, N, P] })],
                  },
                ],
              }),
            ],
          },
        ],
        p = 'prizm-input-layout',
        R = [p, 'placeholder'].join('::'),
        k = [p, 'ngModel'].join('::'),
        Y = [p, 'formControl'].join('::'),
        j = [p, 'formControlName'].join('::'),
        M = [p, 'type'].join('::'),
        S = [p, 'disabled'].join('::'),
        E = [
          {
            selector: 'zyfra-input-number',
            tasks: [
              (0, t.rO)(t.Uw, { name: p }),
              (0, t.rO)(t.Rn, {
                name: 'input',
                attrs: { prizmInput: null, type: 'number' },
                voidElement: !0,
                children: [],
              }),
            ],
            inputs: {
              options: [(0, t.rO)(t.Yh, { newAttrName: 'items', needFixApi: !0 })],
              size: [
                (0, t.rO)(t.gV, { comment: 'TODO: need to correct size format (number > enum)' }),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass size to child ' }),
              ],
              formControl: [
                (0, t.rO)(t.cR, { id: Y, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
              ],
              formControlName: [
                (0, t.rO)(t.cR, { id: j, action: (0, t.rO)(t.Yh, { newAttrName: 'formControlName' }) }),
              ],
              ngModel: [(0, t.rO)(t.cR, { id: k, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) })],
              placeholder: [
                (0, t.rO)(t.cR, { id: R, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
              ],
              value: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a value size to child ' }),
              ],
              step: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a step size to child ' }),
              ],
              min: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a min value to child ' }),
              ],
              max: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a max value to child ' }),
              ],
              dropdownIcon: [(0, t.rO)(t.Yh, { newAttrName: 'icon', needFixApi: !0 })],
              showClear: [(0, t.rO)(t.Yh, { newAttrName: 'forceClear' })],
              disabled: [(0, t.rO)(t.cR, { id: S, action: (0, t.rO)(t.Yh, { newAttrName: 'disabled' }) })],
              type: [(0, t.rO)(t.cR, { id: M, action: (0, t.rO)(t.Yh, { newAttrName: 'type' }) })],
              tooltipPosition: [(0, t.rO)(t.Bp, {})],
              tooltip: [(0, t.rO)(t.Bp, {})],
              format: [(0, t.rO)(t.Bp, {})],
              showButtons: [(0, t.rO)(t.Bp, {})],
              buttonLayout: [(0, t.rO)(t.Bp, {})],
              spanClass: [(0, t.rO)(t.Bp, {})],
              iClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonClass: [(0, t.rO)(t.Bp, {})],
              decrementButtonClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              decrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              locale: [(0, t.rO)(t.Bp, {})],
              localeMatcher: [(0, t.rO)(t.Bp, {})],
              mode: [(0, t.rO)(t.Bp, {})],
              prefix: [(0, t.rO)(t.Bp, {})],
              suffix: [(0, t.rO)(t.Bp, {})],
              currency: [(0, t.rO)(t.Bp, {})],
              currencyDisplay: [(0, t.rO)(t.Bp, {})],
              useGrouping: [(0, t.rO)(t.Bp, {})],
              minFractionDigits: [(0, t.rO)(t.Bp, {})],
              maxFractionDigits: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              inputStyle: [(0, t.rO)(t.Bp, {})],
              inputStyleClass: [(0, t.rO)(t.Bp, {})],
              maxlength: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              title: [(0, t.rO)(t.Bp, {})],
              ariaLabel: [(0, t.rO)(t.Bp, {})],
              ariaRequired: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
              autocomplete: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onInput: [(0, t.rO)(t.tP, {})],
              onBlur: [(0, t.rO)(t.tP, {})],
              onFocus: [(0, t.rO)(t.tP, {})],
            },
            finishTasks: [
              (0, t.rO)(t.dj, {
                dontRunOnOnMain: !0,
                runOnChildren: !0,
                tasks: [
                  {
                    selector: [{ type: 'byAttr', attrs: { prizmInput: void 0 } }],
                    inputs: {},
                    outputs: {},
                    tasks: [(0, t.rO)(t.wn, { id: [R, k, Y, j, S, M] })],
                  },
                ],
              }),
            ],
          },
        ],
        H = [
          {
            selector: [{ type: 'byAttr', attrs: { zyfraTooltip: void 0 } }],
            tasks: [],
            inputs: {
              zyfraTooltip: [(0, t.rO)(t.Yh, { newAttrName: 'prizmTooltip' })],
              zyfraTooltipShow: [(0, t.rO)(t.Yh, { newAttrName: 'prizmHintShow' })],
              zyfraTooltipContext: [(0, t.rO)(t.Yh, { newAttrName: 'prizmHintContext' })],
              zyfraTooltipDelay: [(0, t.rO)(t.Yh, { newAttrName: 'prizmTooltipShowDelay' })],
              zyfraTooltipPosition: [(0, t.rO)(t.Yh, { newAttrName: 'prizmHintDirection', needFixApi: !0 })],
              zyfraTooltipColor: [(0, t.rO)(t.Bp, {})],
              zyfraTooltipClass: [(0, t.rO)(t.Bp, {})],
              zyfraTooltipOverflowText: [(0, t.rO)(t.Bp, {})],
            },
            outputs: { zyfraTooltipShowChange: [(0, t.rO)(t.Yh, { newAttrName: 'prizmHoveredChange' })] },
          },
        ],
        l = 'prizm-input-layout',
        Z = [l, 'placeholder'].join('::'),
        D = [l, 'ngModel'].join('::'),
        F = [l, 'formControl'].join('::'),
        L = [l, 'formControlName'].join('::'),
        U = [l, 'type'].join('::'),
        Q = [l, 'disabled'].join('::'),
        J = [l, 'maxlength'].join('::'),
        V = [l, 'minlength'].join('::'),
        q = [l, 'rows'].join('::'),
        X = [l, 'cols'].join('::'),
        $ = [l, 'autoResize'].join('::'),
        W = [
          {
            selector: 'zyfra-textarea',
            tasks: [
              (0, t.rO)(t.Uw, { name: l }),
              (0, t.rO)(t.Rn, {
                name: 'textarea',
                attrs: { prizmInput: null },
                voidElement: !1,
                children: [],
              }),
            ],
            inputs: {
              maxlength: [(0, t.rO)(t.cR, { id: J, action: (0, t.rO)(t.Yh, { newAttrName: 'maxlength' }) })],
              minlength: [(0, t.rO)(t.cR, { id: V, action: (0, t.rO)(t.Yh, { newAttrName: 'minlength' }) })],
              rows: [(0, t.rO)(t.cR, { id: q, action: (0, t.rO)(t.Yh, { newAttrName: 'rows' }) })],
              autoResize: [
                (0, t.rO)(t.cR, { id: $, action: (0, t.rO)(t.Yh, { newAttrName: 'autoResize' }) }),
              ],
              cols: [(0, t.rO)(t.cR, { id: X, action: (0, t.rO)(t.Yh, { newAttrName: 'cols' }) })],
              options: [(0, t.rO)(t.Yh, { newAttrName: 'items', needFixApi: !0 })],
              size: [
                (0, t.rO)(t.gV, { comment: 'TODO: need to correct size format (number > enum)' }),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass size to child ' }),
              ],
              formControl: [
                (0, t.rO)(t.cR, { id: F, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
              ],
              disabled: [(0, t.rO)(t.cR, { id: Q, action: (0, t.rO)(t.Yh, { newAttrName: 'disabled' }) })],
              type: [(0, t.rO)(t.cR, { id: U, action: (0, t.rO)(t.Yh, { newAttrName: 'type' }) })],
              formControlName: [
                (0, t.rO)(t.cR, { id: L, action: (0, t.rO)(t.Yh, { newAttrName: 'formControlName' }) }),
              ],
              ngModel: [(0, t.rO)(t.cR, { id: D, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) })],
              placeholder: [
                (0, t.rO)(t.cR, { id: Z, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
              ],
              value: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a value size to child ' }),
              ],
              step: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a step size to child ' }),
              ],
              min: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a min value to child ' }),
              ],
              max: [
                (0, t.rO)(t.tP, {}),
                (0, t.rO)(t.gV, { comment: 'TODO: You also need to pass a max value to child ' }),
              ],
              dropdownIcon: [(0, t.rO)(t.Yh, { newAttrName: 'icon', needFixApi: !0 })],
              showClear: [(0, t.rO)(t.Yh, { newAttrName: 'forceClear' })],
              tooltipPosition: [(0, t.rO)(t.Bp, {})],
              tooltip: [(0, t.rO)(t.Bp, {})],
              format: [(0, t.rO)(t.Bp, {})],
              showButtons: [(0, t.rO)(t.Bp, {})],
              buttonLayout: [(0, t.rO)(t.Bp, {})],
              spanClass: [(0, t.rO)(t.Bp, {})],
              iClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonClass: [(0, t.rO)(t.Bp, {})],
              decrementButtonClass: [(0, t.rO)(t.Bp, {})],
              incrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              decrementButtonIcon: [(0, t.rO)(t.Bp, {})],
              locale: [(0, t.rO)(t.Bp, {})],
              localeMatcher: [(0, t.rO)(t.Bp, {})],
              mode: [(0, t.rO)(t.Bp, {})],
              prefix: [(0, t.rO)(t.Bp, {})],
              suffix: [(0, t.rO)(t.Bp, {})],
              currency: [(0, t.rO)(t.Bp, {})],
              currencyDisplay: [(0, t.rO)(t.Bp, {})],
              useGrouping: [(0, t.rO)(t.Bp, {})],
              minFractionDigits: [(0, t.rO)(t.Bp, {})],
              maxFractionDigits: [(0, t.rO)(t.Bp, {})],
              style: [(0, t.rO)(t.Bp, {})],
              styleClass: [(0, t.rO)(t.Bp, {})],
              inputId: [(0, t.rO)(t.Bp, {})],
              inputStyle: [(0, t.rO)(t.Bp, {})],
              inputStyleClass: [(0, t.rO)(t.Bp, {})],
              tabindex: [(0, t.rO)(t.Bp, {})],
              title: [(0, t.rO)(t.Bp, {})],
              ariaLabel: [(0, t.rO)(t.Bp, {})],
              ariaRequired: [(0, t.rO)(t.Bp, {})],
              name: [(0, t.rO)(t.Bp, {})],
              autocomplete: [(0, t.rO)(t.Bp, {})],
            },
            outputs: {
              onResize: [(0, t.rO)(t.tP, {})],
              onInput: [(0, t.rO)(t.tP, {})],
              onBlur: [(0, t.rO)(t.tP, {})],
              onFocus: [(0, t.rO)(t.tP, {})],
            },
            finishTasks: [
              (0, t.rO)(t.dj, {
                dontRunOnOnMain: !0,
                runOnChildren: !0,
                tasks: [
                  {
                    selector: [{ type: 'byAttr', attrs: { prizmInput: void 0 } }],
                    inputs: {},
                    outputs: {},
                    tasks: [(0, t.rO)(t.wn, { id: [Z, D, F, L, Q, U, J, V, q, X, $] })],
                  },
                ],
              }),
            ],
          },
        ],
        G = ['prizm-input-select', 'formControl'].join('::'),
        K = ['prizm-input-select', 'ngModel'].join('::'),
        _ = ['prizm-input-select', 'dropdownWidth'].join('::'),
        tt = ['prizm-input-select', 'emptyContent'].join('::'),
        et = ['prizm-input-select', 'icon'].join('::'),
        nt = ['prizm-input-select', 'identityMatcher'].join('::'),
        ot = ['prizm-input-select', 'items'].join('::'),
        at = ['prizm-input-select', 'maxDropdownHeight'].join('::'),
        it = ['prizm-input-select', 'minDropdownHeight'].join('::'),
        rt = ['prizm-input-select', 'nullContent'].join('::'),
        st = ['prizm-input-select', 'placeholder'].join('::'),
        lt = ['prizm-input-select', 'searchMatcher'].join('::'),
        mt = ['prizm-input-select', 'searchable'].join('::'),
        pt = ['prizm-input-select', 'stringify'].join('::'),
        ct = ['prizm-input-select', 'valueTemplate'].join('::'),
        dt = ['prizm-input-select', 'search'].join('::'),
        ut = ['prizm-input-select', 'output-search'].join('::'),
        Ot = [
          {
            selector: 'prizm-select',
            tasks: [
              (0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
              (0, t.rO)(t.Rn, { name: 'prizm-input-select', attrs: {}, voidElement: !0, children: [] }),
            ],
            defaultInputs: {
              label:
                '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430',
            },
            inputs: {
              dropdownWidth: [
                (0, t.rO)(t.cR, { id: _, action: (0, t.rO)(t.Yh, { newAttrName: 'dropdownWidth' }) }),
              ],
              formControl: [
                (0, t.rO)(t.cR, { id: G, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
              ],
              ngModel: [(0, t.rO)(t.cR, { id: K, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) })],
              emptyContent: [
                (0, t.rO)(t.cR, { id: tt, action: (0, t.rO)(t.Yh, { newAttrName: 'emptyContent' }) }),
              ],
              icon: [(0, t.rO)(t.cR, { id: et, action: (0, t.rO)(t.Yh, { newAttrName: 'icon' }) })],
              identityMatcher: [
                (0, t.rO)(t.cR, { id: nt, action: (0, t.rO)(t.Yh, { newAttrName: 'identityMatcher' }) }),
              ],
              items: [(0, t.rO)(t.cR, { id: ot, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) })],
              maxDropdownHeight: [
                (0, t.rO)(t.cR, { id: at, action: (0, t.rO)(t.Yh, { newAttrName: 'maxDropdownHeight' }) }),
              ],
              minDropdownHeight: [
                (0, t.rO)(t.cR, { id: it, action: (0, t.rO)(t.Yh, { newAttrName: 'minDropdownHeight' }) }),
              ],
              nullContent: [
                (0, t.rO)(t.cR, { id: rt, action: (0, t.rO)(t.Yh, { newAttrName: 'nullContent' }) }),
              ],
              placeholder: [
                (0, t.rO)(t.cR, { id: st, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
              ],
              searchMatcher: [
                (0, t.rO)(t.cR, { id: lt, action: (0, t.rO)(t.Yh, { newAttrName: 'searchMatcher' }) }),
              ],
              searchable: [
                (0, t.rO)(t.cR, { id: mt, action: (0, t.rO)(t.Yh, { newAttrName: 'searchable' }) }),
              ],
              stringify: [(0, t.rO)(t.cR, { id: pt, action: (0, t.rO)(t.Yh, { newAttrName: 'stringify' }) })],
              valueTemplate: [
                (0, t.rO)(t.cR, { id: ct, action: (0, t.rO)(t.Yh, { newAttrName: 'valueTemplate' }) }),
              ],
              search: [(0, t.rO)(t.cR, { id: dt, action: (0, t.rO)(t.Yh, { newAttrName: 'search' }) })],
            },
            outputs: {
              searchChange: [
                (0, t.rO)(t.cR, { id: ut, action: (0, t.rO)(t.Yh, { newAttrName: 'searchChange' }) }),
              ],
            },
            finishTasks: [
              (0, t.rO)(t.dj, {
                dontRunOnOnMain: !0,
                runOnChildren: !0,
                tasks: [
                  {
                    selector: 'prizm-input-select',
                    inputs: {},
                    outputs: {},
                    tasks: [
                      (0, t.rO)(t.wn, {
                        id: [_, tt, et, nt, ot, at, it, rt, st, lt, mt, pt, ct, dt, ut, K, G],
                      }),
                    ],
                  },
                ],
              }),
            ],
          },
        ],
        ht = ['prizm-input-multi-select', 'formControl'].join('::'),
        ft = ['prizm-input-multi-select', 'ngModel'].join('::'),
        zt = ['prizm-input-multi-select', 'dropdownWidth'].join('::'),
        yt = ['prizm-input-multi-select', 'emptyContent'].join('::'),
        gt = ['prizm-input-multi-select', 'icon'].join('::'),
        xt = ['prizm-input-multi-select', 'identityMatcher'].join('::'),
        bt = ['prizm-input-multi-select', 'isChipsDeletable'].join('::'),
        Bt = ['prizm-input-multi-select', 'items'].join('::'),
        At = ['prizm-input-multi-select', 'maxDropdownHeight'].join('::'),
        Ct = ['prizm-input-multi-select', 'minDropdownHeight'].join('::'),
        vt = ['prizm-input-multi-select', 'nullContent'].join('::'),
        wt = ['prizm-input-multi-select', 'placeholder'].join('::'),
        Tt = ['prizm-input-multi-select', 'searchMatcher'].join('::'),
        Pt = ['prizm-input-multi-select', 'searchable'].join('::'),
        Nt = ['prizm-input-multi-select', 'selectAllItem'].join('::'),
        It = ['prizm-input-multi-select', 'stringify'].join('::'),
        Rt = ['prizm-input-multi-select', 'valueTemplate'].join('::'),
        kt = ['prizm-input-multi-select', 'search'].join('::'),
        Yt = ['prizm-input-multi-select', 'output-search'].join('::'),
        jt =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, { name: 'prizm-input-multi-select', attrs: {}, voidElement: !0, children: [] }),
          (0, t.rO)(t.cR, { id: zt, action: (0, t.rO)(t.Yh, { newAttrName: 'dropdownWidth' }) }),
          (0, t.rO)(t.cR, { id: ht, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: ft, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: yt, action: (0, t.rO)(t.Yh, { newAttrName: 'emptyContent' }) }),
          (0, t.rO)(t.cR, { id: gt, action: (0, t.rO)(t.Yh, { newAttrName: 'icon' }) }),
          (0, t.rO)(t.cR, { id: xt, action: (0, t.rO)(t.Yh, { newAttrName: 'identityMatcher' }) }),
          (0, t.rO)(t.cR, { id: bt, action: (0, t.rO)(t.Yh, { newAttrName: 'isChipsDeletable' }) }),
          (0, t.rO)(t.cR, { id: Bt, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: At, action: (0, t.rO)(t.Yh, { newAttrName: 'maxDropdownHeight' }) }),
          (0, t.rO)(t.cR, { id: Ct, action: (0, t.rO)(t.Yh, { newAttrName: 'minDropdownHeight' }) }),
          (0, t.rO)(t.cR, { id: vt, action: (0, t.rO)(t.Yh, { newAttrName: 'nullContent' }) }),
          (0, t.rO)(t.cR, { id: wt, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: Tt, action: (0, t.rO)(t.Yh, { newAttrName: 'searchMatcher' }) }),
          (0, t.rO)(t.cR, { id: Pt, action: (0, t.rO)(t.Yh, { newAttrName: 'searchable' }) }),
          (0, t.rO)(t.cR, { id: Nt, action: (0, t.rO)(t.Yh, { newAttrName: 'selectAllItem' }) }),
          (0, t.rO)(t.cR, { id: It, action: (0, t.rO)(t.Yh, { newAttrName: 'stringify' }) }),
          (0, t.rO)(t.cR, { id: Rt, action: (0, t.rO)(t.Yh, { newAttrName: 'valueTemplate' }) }),
          (0, t.rO)(t.cR, { id: kt, action: (0, t.rO)(t.Yh, { newAttrName: 'search' }) }),
          (0, t.rO)(t.cR, { id: Yt, action: (0, t.rO)(t.Yh, { newAttrName: 'searchChange' }) }),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-multi-select',
                inputs: {},
                outputs: {},
                tasks: [
                  (0, t.rO)(t.wn, {
                    id: [zt, yt, gt, xt, Bt, At, Ct, vt, wt, Tt, Pt, It, Rt, kt, Yt, ft, ht, Nt, bt],
                  }),
                ],
              },
            ],
          }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.Yh, { newAttrName: 'prizmHintShowed' }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.Yh, { newAttrName: 'prizmTooltipShowed' }),
          ['prizm-input-layout-date', 'formControl'].join('::')),
        Mt = ['prizm-input-layout-date', 'ngModel'].join('::'),
        St = ['prizm-input-layout-date', 'defaultActiveYearMonth'].join('::'),
        Et = ['prizm-input-layout-date', 'disabledItemHandler'].join('::'),
        Ht = ['prizm-input-layout-date', 'extraButtonInjector'].join('::'),
        Zt = ['prizm-input-layout-date', 'items'].join('::'),
        Dt = ['prizm-input-layout-date', 'markerHandler'].join('::'),
        Ft = ['prizm-input-layout-date', 'max'].join('::'),
        Lt = ['prizm-input-layout-date', 'placeholder'].join('::'),
        Ut = ['prizm-input-layout-date', 'readOnly'].join('::'),
        Qt = ['prizm-input-layout-date', 'min'].join('::'),
        Jt = ['prizm-input-layout-date', 'testId'].join('::'),
        Vt =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, { name: 'prizm-input-layout-date', attrs: {}, voidElement: !0, children: [] }),
          (0, t.rO)(t.cR, { id: St, action: (0, t.rO)(t.Yh, { newAttrName: 'defaultActiveYearMonth' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: jt, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: Mt, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: Et, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: Ht, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: Zt, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: Dt, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: Ft, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: Qt, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: Lt, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: Jt, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: Ut, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-date',
                inputs: {},
                outputs: {},
                tasks: [(0, t.rO)(t.wn, { id: [jt, Mt, St, Et, Ht, Zt, Dt, Ft, Lt, Ut, Qt, Jt] })],
              },
            ],
          }),
          ['prizm-input-layout-date-time', 'formControl'].join('::')),
        qt = ['prizm-input-layout-date-time', 'ngModel'].join('::'),
        Xt = ['prizm-input-layout-date-time', 'defaultActiveYearMonth'].join('::'),
        $t = ['prizm-input-layout-date-time', 'disabledItemHandler'].join('::'),
        Wt = ['prizm-input-layout-date-time', 'extraButtonInjector'].join('::'),
        Gt = ['prizm-input-layout-date-time', 'items'].join('::'),
        Kt = ['prizm-input-layout-date-time', 'markerHandler'].join('::'),
        _t = ['prizm-input-layout-date-time', 'max'].join('::'),
        te = ['prizm-input-layout-date-time', 'placeholder'].join('::'),
        ee = ['prizm-input-layout-date-time', 'readOnly'].join('::'),
        ne = ['prizm-input-layout-date-time', 'min'].join('::'),
        oe = ['prizm-input-layout-date-time', 'timeItems'].join('::'),
        ae = ['prizm-input-layout-date-time', 'timeMode'].join('::'),
        ie = ['prizm-input-layout-date-time', 'timeStrict'].join('::'),
        re = ['prizm-input-layout-date-time', 'testId'].join('::'),
        se =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, { name: 'prizm-input-layout-date-time', attrs: {}, voidElement: !0, children: [] }),
          (0, t.rO)(t.cR, { id: Xt, action: (0, t.rO)(t.Yh, { newAttrName: 'defaultActiveYearMonth' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: Vt, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: qt, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: $t, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: Wt, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: Gt, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: oe, action: (0, t.rO)(t.Yh, { newAttrName: 'timeItems' }) }),
          (0, t.rO)(t.cR, { id: ae, action: (0, t.rO)(t.Yh, { newAttrName: 'timeMode' }) }),
          (0, t.rO)(t.cR, { id: ie, action: (0, t.rO)(t.Yh, { newAttrName: 'timeStrict' }) }),
          (0, t.rO)(t.cR, { id: re, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: Kt, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: _t, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: ne, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: te, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: ee, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-date-time',
                inputs: {},
                outputs: {},
                tasks: [
                  (0, t.rO)(t.wn, { id: [Vt, qt, Xt, $t, Wt, Gt, Kt, _t, te, ee, ne, oe, ae, ie, re] }),
                ],
              },
            ],
          }),
          ['prizm-input-layout-date-time-range', 'formControl'].join('::')),
        le = ['prizm-input-layout-date-time-range', 'ngModel'].join('::'),
        me = ['prizm-input-layout-date-time-range', 'defaultActiveYearMonth'].join('::'),
        pe = ['prizm-input-layout-date-time-range', 'disabledItemHandler'].join('::'),
        ce = ['prizm-input-layout-date-time-range', 'extraButtonInjector'].join('::'),
        de = ['prizm-input-layout-date-time-range', 'items'].join('::'),
        ue = ['prizm-input-layout-date-time-range', 'markerHandler'].join('::'),
        Oe = ['prizm-input-layout-date-time-range', 'max'].join('::'),
        he = ['prizm-input-layout-date-time-range', 'placeholder'].join('::'),
        fe = ['prizm-input-layout-date-time-range', 'readOnly'].join('::'),
        ze = ['prizm-input-layout-date-time-range', 'min'].join('::'),
        ye = ['prizm-input-layout-date-time-range', 'timeItems'].join('::'),
        ge = ['prizm-input-layout-date-time-range', 'timeMode'].join('::'),
        xe = ['prizm-input-layout-date-time-range', 'timeStrict'].join('::'),
        be = ['prizm-input-layout-date-time-range', 'testId'].join('::'),
        Be =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, {
            name: 'prizm-input-layout-date-time-range',
            attrs: {},
            voidElement: !0,
            children: [],
          }),
          (0, t.rO)(t.cR, { id: me, action: (0, t.rO)(t.Yh, { newAttrName: 'defaultActiveYearMonth' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: se, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: le, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: pe, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: ce, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: de, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: ye, action: (0, t.rO)(t.Yh, { newAttrName: 'timeItems' }) }),
          (0, t.rO)(t.cR, { id: ge, action: (0, t.rO)(t.Yh, { newAttrName: 'timeMode' }) }),
          (0, t.rO)(t.cR, { id: xe, action: (0, t.rO)(t.Yh, { newAttrName: 'timeStrict' }) }),
          (0, t.rO)(t.cR, { id: be, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: ue, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: Oe, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: ze, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: he, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: fe, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-date-time-range',
                inputs: {},
                outputs: {},
                tasks: [
                  (0, t.rO)(t.wn, { id: [se, le, me, pe, ce, de, ue, Oe, he, fe, ze, ye, ge, xe, be] }),
                ],
              },
            ],
          }),
          ['prizm-input-layout-time', 'formControl'].join('::')),
        Ae = ['prizm-input-layout-time', 'ngModel'].join('::'),
        Ce = ['prizm-input-layout-time', 'itemSize'].join('::'),
        ve = ['prizm-input-layout-time', 'disabledItemHandler'].join('::'),
        we = ['prizm-input-layout-time', 'extraButtonInjector'].join('::'),
        Te = ['prizm-input-layout-time', 'items'].join('::'),
        Pe = ['prizm-input-layout-time', 'mode'].join('::'),
        Ne = ['prizm-input-layout-time', 'strict'].join('::'),
        Ie = ['prizm-input-layout-time', 'placeholder'].join('::'),
        Re = ['prizm-input-layout-time', 'readOnly'].join('::'),
        ke = ['prizm-input-layout-time', 'testId'].join('::'),
        Ye =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, { name: 'prizm-input-layout-time', attrs: {}, voidElement: !0, children: [] }),
          (0, t.rO)(t.cR, { id: Ce, action: (0, t.rO)(t.Yh, { newAttrName: 'itemSize' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: Be, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: ke, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: Ae, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: ve, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: we, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: Te, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: Pe, action: (0, t.rO)(t.Yh, { newAttrName: 'mode' }) }),
          (0, t.rO)(t.cR, { id: Ne, action: (0, t.rO)(t.Yh, { newAttrName: 'strict' }) }),
          (0, t.rO)(t.cR, { id: Ie, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: Re, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-time',
                inputs: {},
                outputs: {},
                tasks: [(0, t.rO)(t.wn, { id: [Be, Ae, Ce, ve, we, Te, Pe, Ne, Ie, Re, ke] })],
              },
            ],
          }),
          ['prizm-input-layout-month', 'formControl'].join('::')),
        je = ['prizm-input-layout-month', 'ngModel'].join('::'),
        Me = ['prizm-input-layout-month', 'disabledItemHandler'].join('::'),
        Se = ['prizm-input-layout-month', 'extraButtonInjector'].join('::'),
        Ee = ['prizm-input-layout-month', 'items'].join('::'),
        He = ['prizm-input-layout-month', 'markerHandler'].join('::'),
        Ze = ['prizm-input-layout-month', 'max'].join('::'),
        De = ['prizm-input-layout-month', 'placeholder'].join('::'),
        Fe = ['prizm-input-layout-month', 'readOnly'].join('::'),
        Le = ['prizm-input-layout-month', 'min'].join('::'),
        Ue = ['prizm-input-layout-month', 'testId'].join('::'),
        Qe =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, { name: 'prizm-input-layout-month', attrs: {}, voidElement: !0, children: [] }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: Ye, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: je, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: Me, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: Se, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: Ee, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: He, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: Ze, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: Le, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: De, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: Ue, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: Fe, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-month',
                inputs: {},
                outputs: {},
                tasks: [(0, t.rO)(t.wn, { id: [Ye, je, Me, Se, Ee, He, Ze, De, Fe, Le, Ue] })],
              },
            ],
          }),
          ['prizm-input-layout-month-range', 'formControl'].join('::')),
        Je = ['prizm-input-layout-month-range', 'ngModel'].join('::'),
        Ve = ['prizm-input-layout-month-range', 'disabledItemHandler'].join('::'),
        qe = ['prizm-input-layout-month-range', 'extraButtonInjector'].join('::'),
        Xe = ['prizm-input-layout-month-range', 'items'].join('::'),
        $e = ['prizm-input-layout-month-range', 'markerHandler'].join('::'),
        We = ['prizm-input-layout-month-range', 'max'].join('::'),
        Ge = ['prizm-input-layout-month-range', 'placeholder'].join('::'),
        Ke = ['prizm-input-layout-month-range', 'readOnly'].join('::'),
        _e = ['prizm-input-layout-month-range', 'min'].join('::'),
        tn = ['prizm-input-layout-month-range', 'testId'].join('::'),
        en =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, {
            name: 'prizm-input-layout-month-range',
            attrs: {},
            voidElement: !0,
            children: [],
          }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: Qe, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: Je, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: Ve, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: qe, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: Xe, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: $e, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: We, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: _e, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: Ge, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: tn, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: Ke, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-month-range',
                inputs: {},
                outputs: {},
                tasks: [(0, t.rO)(t.wn, { id: [Qe, Je, Ve, qe, Xe, $e, We, Ge, Ke, _e, tn] })],
              },
            ],
          }),
          ['prizm-input-layout-date-range', 'formControl'].join('::')),
        nn = ['prizm-input-layout-date-range', 'ngModel'].join('::'),
        on = ['prizm-input-layout-date-range', 'defaultViewedMonth'].join('::'),
        an = ['prizm-input-layout-date-range', 'disabledItemHandler'].join('::'),
        rn = ['prizm-input-layout-date-range', 'extraButtonInjector'].join('::'),
        sn = ['prizm-input-layout-date-range', 'items'].join('::'),
        ln = ['prizm-input-layout-date-range', 'markerHandler'].join('::'),
        mn = ['prizm-input-layout-date-range', 'max'].join('::'),
        pn = ['prizm-input-layout-date-range', 'placeholder'].join('::'),
        cn = ['prizm-input-layout-date-range', 'readOnly'].join('::'),
        dn = ['prizm-input-layout-date-range', 'min'].join('::'),
        un = ['prizm-input-layout-date-range', 'testId'].join('::'),
        On = ['prizm-input-layout-date-range', 'maxLength'].join('::'),
        hn = ['prizm-input-layout-date-range', 'minLength'].join('::'),
        fn =
          ((0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
          (0, t.rO)(t.Rn, {
            name: 'prizm-input-layout-date-range',
            attrs: {},
            voidElement: !0,
            children: [],
          }),
          (0, t.rO)(t.cR, { id: on, action: (0, t.rO)(t.Yh, { newAttrName: 'defaultViewedMonth' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.cR, { id: en, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
          (0, t.rO)(t.cR, { id: nn, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
          (0, t.rO)(t.cR, { id: an, action: (0, t.rO)(t.Yh, { newAttrName: 'disabledItemHandler' }) }),
          (0, t.rO)(t.cR, { id: rn, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
          (0, t.rO)(t.cR, { id: sn, action: (0, t.rO)(t.Yh, { newAttrName: 'items' }) }),
          (0, t.rO)(t.cR, { id: ln, action: (0, t.rO)(t.Yh, { newAttrName: 'markerHandler' }) }),
          (0, t.rO)(t.cR, { id: mn, action: (0, t.rO)(t.Yh, { newAttrName: 'max' }) }),
          (0, t.rO)(t.cR, { id: dn, action: (0, t.rO)(t.Yh, { newAttrName: 'min' }) }),
          (0, t.rO)(t.cR, { id: pn, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
          (0, t.rO)(t.cR, { id: un, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
          (0, t.rO)(t.cR, { id: On, action: (0, t.rO)(t.Yh, { newAttrName: 'maxLength' }) }),
          (0, t.rO)(t.cR, { id: hn, action: (0, t.rO)(t.Yh, { newAttrName: 'minLength' }) }),
          (0, t.rO)(t.cR, { id: cn, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.tP, {}),
          (0, t.rO)(t.dj, {
            dontRunOnOnMain: !0,
            runOnChildren: !0,
            tasks: [
              {
                selector: 'prizm-input-layout-date-range',
                inputs: {},
                outputs: {},
                tasks: [(0, t.rO)(t.wn, { id: [en, nn, on, an, rn, sn, ln, mn, pn, cn, dn, un, On, hn] })],
              },
            ],
          }),
          ['prizm-input-layout-date-relative', 'formControl'].join('::')),
        zn = ['prizm-input-layout-date-relative', 'ngModel'].join('::'),
        yn = ['prizm-input-layout-date-relative', 'disabled'].join('::'),
        gn = ['prizm-input-layout-date-relative', 'extraButtonInjector'].join('::'),
        xn = ['prizm-input-layout-date-relative', 'canOpen'].join('::'),
        bn = ['prizm-input-layout-date-relative', 'placeholder'].join('::'),
        Bn = ['prizm-input-layout-date-relative', 'readOnly'].join('::'),
        An = ['prizm-input-layout-date-relative', 'testId'].join('::');
      (0, t.rO)(t.Uw, { name: 'prizm-input-layout' }),
        (0, t.rO)(t.Rn, {
          name: 'prizm-input-layout-date-relative',
          attrs: {},
          voidElement: !0,
          children: [],
        }),
        (0, t.rO)(t.cR, { id: yn, action: (0, t.rO)(t.Yh, { newAttrName: 'disabled' }) }),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.cR, { id: fn, action: (0, t.rO)(t.Yh, { newAttrName: 'formControl' }) }),
        (0, t.rO)(t.cR, { id: zn, action: (0, t.rO)(t.Yh, { newAttrName: 'ngModel' }) }),
        (0, t.rO)(t.cR, { id: gn, action: (0, t.rO)(t.Yh, { newAttrName: 'extraButtonInjector' }) }),
        (0, t.rO)(t.cR, { id: xn, action: (0, t.rO)(t.Yh, { newAttrName: 'canOpen' }) }),
        (0, t.rO)(t.cR, { id: bn, action: (0, t.rO)(t.Yh, { newAttrName: 'placeholder' }) }),
        (0, t.rO)(t.cR, { id: An, action: (0, t.rO)(t.Yh, { newAttrName: 'testId' }) }),
        (0, t.rO)(t.cR, { id: Bn, action: (0, t.rO)(t.Yh, { newAttrName: 'readOnly' }) }),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.tP, {}),
        (0, t.rO)(t.dj, {
          dontRunOnOnMain: !0,
          runOnChildren: !0,
          tasks: [
            {
              selector: 'prizm-input-layout-date-relative',
              inputs: {},
              outputs: {},
              tasks: [(0, t.rO)(t.wn, { id: [fn, zn, yn, gn, xn, bn, Bn, An] })],
            },
          ],
        });
      let Ln = (() => {
          class o {
            constructor() {
              (this.zyfraAccordionTasks = O),
                (this.zyfraAccordionHtml =
                  '\n<zyfra-accordion [multiple]="false"\n                 (onOpen)="onOpen($event)"\n                 (onClose)="onClose($event)"\n                 (activeIndexChange)="activeIndexChange($event)">\n  <zyfra-accordion-tab header="Header 1"\n                       [disabled]="disabled"\n                       (selectedChange)="selectedChange($event)">\n    Content 1\n  </zyfra-accordion-tab>\n  <zyfra-accordion-tab header="Header 2">\n    Content 2\n  </zyfra-accordion-tab>\n</zyfra-accordion>\n');
            }
            ngOnInit() {
              this.parseAccordion();
            }
            parseAccordion() {
              const n = (0, t.rI)(this.zyfraAccordionHtml),
                i = new t.Xc(this.zyfraAccordionTasks);
              this.resultZyfraAccordionHtml = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-accordion-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n &&
                    (e.Q6J('code', i.zyfraAccordionHtml),
                    e.xp6(2),
                    e.Q6J('code', i.resultZyfraAccordionHtml));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Un = (() => {
          class o {
            constructor() {
              (this.tasks = c),
                (this.html =
                  '\n<zyfra-chip label="Removable" icon="zyfra-icon location-compass" [removable]="true" (onRemove)=\'null\'></zyfra-chip>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-chips-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Qn = (() => {
          class o {
            constructor() {
              (this.tasks = c),
                (this.html =
                  '\n<zyfra-checkbox name="checked" [binary]="true" label="checkbox" [(model)]="model"> ></zyfra-checkbox>\n');
            }
            ngOnInit() {
              this.parseAccordion();
            }
            parseAccordion() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-checkbox-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Jn = (() => {
          class o {
            constructor() {
              (this.tasks = A),
                (this.html =
                  '\n<zyfra-multiselect\n  [(ngModel)]="model"\n  [options]="cities"\n  [optionLabel]="name"\n  [placeholder]="Select a City"\n></zyfra-multiselect>');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-multi-select-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Vn = (() => {
          class o {
            constructor() {
              (this.tasks = E),
                (this.html =
                  '\n<zyfra-input-number\n    [(ngModel)]="model"\n    [formControl]="formControl"\n    [formControlName]="formControlName"\n    label="label"\n    placeholder="placeholder"\n    showButtons="true"\n    mode="currency"\n    currency="USD"\n></zyfra-input-number>');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-input-number-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        qn = (() => {
          class o {
            constructor() {
              (this.tasks = H),
                (this.html =
                  '\n<ng-template #someTemplate><span>Show me</span></div></ng-template>\n<button zyfraButton\n    class="class"\n    type="button"\n    [zyfraTooltip]="someTemplate"\n    color="success"\n    zyfraTooltipPosition="right"\n>\n  Right\n</button>\n\n\n<button\n  zyfraButton\n  class="class"\n  type="button"\n  zyfraTooltip="\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u043f\u0440\u0430\u0432\u0430"\n  zyfraTooltipPosition="right"\n>\n    Right\n</button>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-tooltip-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Xn = (() => {
          class o {
            constructor() {
              (this.tasks = C),
                (this.html =
                  "\n<zyfra-input-switch\n[disabled]='true'\n[readonly]='true'\n[mini]='true'\n[(ngModel)]=\"checked\"></zyfra-input-switch>\n");
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-input-switch-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        $n = (() => {
          class o {
            constructor() {
              (this.tasks = y),
                (this.html =
                  '\n<zyfra-toggle-button\n  onLabel="onLabel"\n  offLabel="offLabel"\n  onIcon="onLabel"\n  [offIcon]="offLabel"\n  styleClass="p-button-info"\n></zyfra-toggle-button>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-toggle-button-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Wn = (() => {
          class o {
            constructor() {
              (this.tasks = b),
                (this.html =
                  '\n<zyfra-spinner\n  size="50px"\n  color="success"\n  [style]="{ opacity: 0.5 }"\n></zyfra-spinner>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-spinner-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Gn = (() => {
          class o {
            constructor() {
              (this.tasks = I),
                (this.html =
                  '\n<zyfra-input\n  [id]="id"\n  [type]="type"\n  [(ngModel)]="ngModel"\n  [disabled]="disabled"\n  [placeholder]="placeholder"\n  [tooltip]="tooltip"\n  [tooltipPosition]="tooltipPosition"\n  [label]="label"\n></zyfra-input>');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-input-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Kn = (() => {
          class o {
            constructor() {
              (this.tasks = g),
                (this.html =
                  '\n<zyfra-tab-view\n  [class]="zyfraTabViewTagStyle"\n  [activeIndex]="activeIndex"\n  [controlClose]="controlClose"\n  [style]="style"\n  [styleClass]="styleClass"\n  (onChange)="onChangeHandler($event)"\n  (onClose)="onCloseHandler($event)"\n>\n  <ng-container *ngFor="let tab of tabs">\n    <zyfra-tab-panel\n      [header]="tab.header"\n      [selected]="tab.selected"\n      [disabled]="tab.disabled"\n      [closable]="tab.closable"\n      [leftIcon]="tab.leftIcon"\n      [rightIcon]="tab.rightIcon"\n      [headerStyle]="tab.headerStyle"\n      [headerStyleClass]="tab.headerStyleClass"\n      [cache]="tab.cache"\n      [tooltip]="tab.tooltip"\n      [tooltipPosition]="tab.tooltipPosition"\n      [tooltipStyleClass]="tab.tooltipStyleClass"\n    >\n      {{ tab.content }}\n    </zyfra-tab-panel>\n  </ng-container>\n</zyfra-tab-view>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-tabs-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        _n = (() => {
          class o {
            constructor() {
              (this.tasks = x),
                (this.html =
                  '\n<zyfra-split-button\n  label="SplitButton"\n  icon="old-icon"\n  iconPos="left"\n  [disabled]="true"\n  [model]="model"\n  showTransitionOptions="225ms ease-out"\n  hideTransitionOptions="195ms ease-in"\n  (onClick)="onClick($event)"\n  (onDropdownClick)="onDropdownClick($event)"\n></zyfra-split-button>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-split-button-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        to = (() => {
          class o {
            constructor() {
              (this.tasks = B),
                (this.html =
                  '\n<zyfra-radio-button\n   *ngFor="let item of items"\n   [name]="name"\n   [styleClass]="styleClass"\n   [label]="item.label"\n   [value]="item.value"\n   [disabled]="disabled"\n   [(ngModel)]="model"\n   (onClick)="onClick($event)"\n   (ngModelChange)="ngModelChange($event)"\n   (onFocus)="onFocus($event)"\n   (onBlur)="onBlur($event)"\n></zyfra-radio-button>\n');
            }
            ngOnInit() {
              this.parseAccordion();
            }
            parseAccordion() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-radio-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        eo = (() => {
          class o {
            constructor() {
              (this.tasks = W),
                (this.html =
                  '\n<zyfra-textarea\n\n  [(ngModel)]="modelForTextArea"\n  placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442.."\n  class="inputClass"\n  disabled="false"\n  maxlength="100"\n  minlength="0"\n  rows="5"\n  cols="10"\n  autoResize="false"\n  name="some name"\n  (onResize)="onResizeTextAreaHandler($event)"\n></zyfra-textarea>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-textarea-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        no = (() => {
          class o {
            constructor() {
              (this.tasks = z),
                (this.html =
                  '\n<zyfra-dropdown\n  [options]="cities"\n  [(ngModel)]="model"\n  optionLabel="name"\n  placeholder="Select a City"\n  [showClear]="true"\n></zyfra-dropdown>');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-dropdown-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        oo = (() => {
          class o {
            constructor() {
              (this.tasks = h),
                (this.html =
                  '\n<zyfra-breadcrumb\n  [model]="items"\n  [home]="home"\n  [style]="style"\n  [items]="[]"\n  [styleClass]="styleClass"\n  (onItemClick)="onItemClickHandler($event)">\n</zyfra-breadcrumb>\n');
            }
            ngOnInit() {
              this.parseAccordion();
            }
            parseAccordion() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-breadcrumb-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        ao = (() => {
          class o {
            constructor() {
              (this.zyfraButtonTasks = f),
                (this.zyfraButtonHtml =
                  "\n  <zyfra-button label='123' iconPos='left'></zyfra-button>\n  <zyfra-button (onFocus)='null'>Test</zyfra-button>\n");
            }
            ngOnInit() {
              this.parseButton();
            }
            parseButton() {
              const n = (0, t.rI)(this.zyfraButtonHtml),
                i = new t.Xc(this.zyfraButtonTasks);
              this.resultZyfraButtonHtml = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-button-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'source html', 3, 'code'],
                ['filename', 'result html', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n &&
                    (e.Q6J('code', i.zyfraButtonHtml), e.xp6(2), e.Q6J('code', i.resultZyfraButtonHtml));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        io = (() => {
          class o {
            constructor() {
              (this.tasks = Ot),
                (this.html =
                  '<prizm-stepper\n  [currentStep]="currentStep"\n  [title]="\'Stepper vertical example\'"\n  [vertical]="true"\n  [stepsSize]="\'150px\'"\n  (selectStep)="this.currentStep = $event"\n>\n  <ng-template\n    [prizmStepperStep]="1"\n    [title]="steps[1].title"\n    [status]="steps[1].status"\n    [disabled]="steps[1].disabled"\n  >\n    <div>\n      <prizm-select\n        [(ngModel)]="steps[1].status"\n        [items]="statusItems"\n        [label]="\'\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\'"\n        [forceClear]="false"\n      >\n      </prizm-select>\n\n      <div class="next-step-disabled-container">\n        <prizm-checkbox [(ngModel)]="steps[2].disabled">\u0428\u0430\u0433 2 disabled</prizm-checkbox>\n      </div>\n    </div>\n    <br />\n    <div>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi deserunt ratione eius consequatur earum\n      laborum quod, reprehenderit nam totam excepturi magnam ex quae assumenda autem, amet nostrum repellendus\n      itaque, praesentium nisi reiciendis! Nostrum praesentium provident dolorem blanditiis vitae mollitia\n      nobis dicta? At recusandae autem ab ut repellendus repudiandae possimus, corporis quaerat ullam dolores\n      libero quas in dicta laudantium quos, explicabo maxime nostrum architecto fuga, neque provident vitae?\n      Odit, necessitatibus. Veritatis voluptatem aperiam perspiciatis nesciunt ab reiciendis, voluptatum atque\n      nobis dolor ullam optio soluta dignissimos pariatur rem est totam quam officia. Dolorum nihil harum quo\n      nulla. Blanditiis dicta earum, vero illo voluptatibus animi commodi voluptate rem ullam, pariatur\n      consectetur quo deleniti tempora labore magnam obcaecati molestias harum dolore molestiae unde itaque!\n      Laborum odit maxime rerum aspernatur reprehenderit expedita laudantium itaque nesciunt eum iste\n      perspiciatis hic ipsum architecto magnam dignissimos odio, quas ipsam eaque suscipit modi voluptatibus\n      officiis possimus. Reiciendis unde tenetur maiores veritatis voluptates molestias ad nihil provident\n      quod id illo facilis\n    </div>\n  </ng-template>\n  <ng-template\n    [prizmStepperStep]="2"\n    [title]="steps[2].title"\n    [status]="steps[2].status"\n    [disabled]="steps[2].disabled"\n  >\n    <div>\n      <prizm-select\n        [(ngModel)]="steps[2].status"\n        [items]="statusItems"\n        [label]="\'\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\'"\n        [forceClear]="false"\n      >\n      </prizm-select>\n      <div class="next-step-disabled-container">\n        <prizm-checkbox [(ngModel)]="steps[3].disabled">\u0428\u0430\u0433 3 disabled</prizm-checkbox>\n      </div>\n    </div>\n    <br />\n    <div>\n      laborum aut, quasi eligendi nihil quo laboriosam beatae repellat perferendis velit, vel accusamus\n      delectus. Odio, repellendus dignissimos unde consequuntur commodi facere laborum, ipsa, optio incidunt\n      sunt doloribus? Architecto, voluptatum, adipisci, autem dolore nam eveniet minima veniam tenetur nemo\n      iusto vel tempore exercitationem amet. Rem in, suscipit eveniet recusandae asperiores nesciunt\n      consectetur ipsam minima. Iure tempora dolores distinctio inventore quas, dicta vitae expedita sapiente\n      provident perferendis sunt aliquam voluptates voluptatibus est. Obcaecati illo iure minus nam facere\n      voluptas est consequatur deleniti amet magni fugiat, sit quas asperiores, voluptate, mollitia inventore\n      commodi libero et doloremque quisquam quam. Expedita, architecto! Nesciunt neque voluptate iusto dicta\n      id error cupiditate ab, corrupti fugit inventore non assumenda voluptatum deleniti autem quidem quia\n      suscipit ipsum maxime incidunt eum fugiat, placeat est animi. Laboriosam cumque dolor quis esse, enim\n      inventore soluta. Nisi natus tempora quis odio atque non explicabo ad, provident voluptas quas esse sed\n      dolore aliquam nulla autem libero similique magnam et quia iusto minima voluptates consequatur ullam.\n      Incidunt aliquid voluptate itaque ipsam! Iusto nobis alias cum inventore sequi maiores. Facilis quae\n      asperiores, accusamus tempore dolorum laboriosam quis dolor ex voluptas. Tempora doloremque nulla,\n      eveniet, ipsam beatae tempore cumque omnis dolorem odio harum quisquam pariatur, rem laborum molestias\n      consequatur? Facilis eaque sed et ad nihil tempore rerum vel ipsa accusantium aliquam aliquid tempora\n      atque obcaecati cumque nulla quos voluptate, dolores cupiditate!\n    </div>\n  </ng-template>\n  <ng-template\n    [prizmStepperStep]="3"\n    [title]="steps[3].title"\n    [status]="steps[3].status"\n    [disabled]="steps[3].disabled"\n  >\n    <div>\n      <prizm-select\n        [(ngModel)]="steps[3].status"\n        [items]="statusItems"\n        [label]="\'\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\'"\n        [forceClear]="false"\n      >\n      </prizm-select>\n\n      <div class="next-step-disabled-container">\n        <prizm-checkbox [(ngModel)]="steps[4].disabled">\u0428\u0430\u0433 4 disabled</prizm-checkbox>\n      </div>\n    </div>\n    <br />\n    <div>\n      laudantium, officiis officia eos suscipit reprehenderit vel repellendus ducimus voluptatum voluptatibus\n      quas provident minima. Delectus accusantium explicabo dicta voluptatum repudiandae officia nesciunt\n      molestias sapiente perferendis culpa quis quisquam nam commodi ipsum possimus consequuntur labore amet\n      libero ducimus, earum molestiae illo porro atque natus. Quibusdam, ex harum dignissimos sed doloremque\n      vel veniam quaerat obcaecati. Qui ratione, praesentium ullam deserunt iste quae reiciendis deleniti\n      laudantium voluptatum omnis nostrum voluptates? Debitis vel commodi praesentium vitae et sapiente\n      consequatur culpa. Nam dignissimos dolor vitae recusandae mollitia incidunt, laudantium quae soluta\n      velit ad! Quod voluptate ea sint molestias error nisi praesentium. Vero, tempora! Tempore est ad quas\n      voluptate eaque sint ipsum ipsam perferendis accusantium laborum consectetur debitis, maiores possimus\n      dignissimos quaerat fugiat aspernatur minima aperiam quisquam sit perspiciatis incidunt. At,\n      exercitationem recusandae atque laborum nobis quas dolorum? Id quaerat corrupti vel sint expedita harum\n      deleniti possimus deserunt nihil, aut est recusandae dolor illum aliquam eos cupiditate dolore totam,\n      labore ipsa officiis veniam earum laudantium. Dicta officia iure beatae, vitae, dolore impedit\n      perspiciatis vel, dolorum eligendi aliquam laboriosam? Expedita ratione sequi repellendus consectetur\n      eaque fugiat quo deleniti laboriosam. Quibusdam quas, ducimus suscipit debitis cum nostrum earum hic\n      dignissimos dolores natus dicta cumque culpa et neque sit labore molestiae eveniet corrupti, minima,\n      pariatur facere. Pariatur labore qui aspernatur reiciendis, doloremque tenetur minus? Ex dolorum atque\n      labore cum consequatur architecto ipsa totam. Fuga ducimus\n    </div>\n  </ng-template>\n  <ng-template\n    [prizmStepperStep]="4"\n    [title]="steps[4].title"\n    [status]="steps[4].status"\n    [disabled]="steps[4].disabled"\n  >\n    <div>\n      <prizm-select\n        [(ngModel)]="steps[4].status"\n        [items]="statusItems"\n        [label]="\'\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\'"\n        [forceClear]="false"\n      >\n      </prizm-select>\n      <div class="next-step-disabled-container">\n        <prizm-checkbox [(ngModel)]="steps[5].disabled">\u0428\u0430\u0433 5 disabled</prizm-checkbox>\n      </div>\n    </div>\n    <br />\n    <div>\n      laborum! Deserunt vitae natus tempore ipsam voluptas quibusdam iure repudiandae odio voluptates, iusto\n      esse culpa vel non repellat eaque assumenda totam hic quae fugiat reprehenderit amet minus perspiciatis.\n      Blanditiis velit dolor nulla sapiente iusto sunt ipsa dignissimos deleniti laboriosam laudantium\n      consequuntur error ipsam expedita, molestiae quisquam itaque eos amet tempore rerum? Dolor nihil soluta\n      maxime fugiat illo veniam, sint consectetur, possimus dicta ratione culpa dignissimos asperiores enim\n      eveniet amet recusandae quos, expedita sunt. Reprehenderit pariatur inventore dignissimos ab eum nisi,\n      odio quia ut mollitia at dolorem minima provident eos laborum debitis recusandae asperiores saepe sed\n      placeat quod nostrum harum dolores unde? Reiciendis deserunt illo ratione obcaecati explicabo, totam\n      animi tenetur sed debitis labore recusandae unde amet? Non ab doloribus laudantium culpa voluptatum,\n      consequuntur ex sequi nostrum sint itaque architecto ratione quaerat cumque perferendis consectetur\n      soluta facere neque ut quae esse sed necessitatibus commodi atque? Dicta cum ratione rem, accusamus\n      natus nulla. Sapiente soluta in aperiam sed quidem sunt reprehenderit, exercitationem ipsam voluptate\n      quibusdam voluptatibus aspernatur, voluptatum facilis sequi, asperiores similique dicta ab? Facere\n      perspiciatis maxime doloremque accusamus illum. Quo, minus asperiores totam accusantium exercitationem\n      expedita omnis doloribus veniam. Dolores commodi temporibus quaerat pariatur aperiam cum animi non ad\n      quibusdam recusandae voluptatem est excepturi incidunt consequuntur laudantium, ipsa, laboriosam\n      asperiores sint autem quasi modi nam quos amet nesciunt! Quia facere minus optio est voluptatibus\n      dolores facilis quo distinctio placeat iusto praesentium beatae odio provident, dicta iste fugit enim\n      hic ea dolor earum! Doloremque nostrum eligendi excepturi atque, animi iste ipsa laborum dolor quibusdam\n      inventore facere\n    </div>\n  </ng-template>\n\n  <ng-template\n    [prizmStepperStep]="5"\n    [title]="steps[5].title"\n    [status]="steps[5].status"\n    [disabled]="steps[5].disabled"\n  >\n    <div>\n      <prizm-select\n        [(ngModel)]="steps[5].status"\n        [items]="statusItems"\n        [label]="\'\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\'"\n        [forceClear]="false"\n      >\n      </prizm-select>\n    </div>\n    <br />\n    <div>\n      modi blanditiis itaque laudantium necessitatibus, harum a facere! Placeat rem quas cum esse animi, ut\n      officiis aliquam voluptatem autem eveniet excepturi earum temporibus praesentium, laboriosam ipsam,\n      porro quis reiciendis. Vero delectus tenetur voluptates sapiente ullam ipsa saepe itaque rem iusto\n      pariatur possimus ea rerum, ducimus quaerat sunt quis temporibus sed suscipit. Est impedit rem iure quam\n      nisi dolor odio. Tempora, natus atque quae totam pariatur quibusdam quasi rem enim, earum, iste est\n      ducimus amet cum reprehenderit architecto. Corrupti similique a est, laboriosam alias non, sequi optio\n      quaerat officiis, temporibus provident exercitationem aspernatur reprehenderit sapiente commodi atque\n      quis quas voluptates deleniti maiores explicabo velit illum laudantium! Sit cum quas ratione.\n      Reprehenderit, asperiores doloribus sed dolore quos exercitationem. Officia tenetur doloremque\n      reiciendis sunt! Dolorum, consectetur maiores necessitatibus harum, nostrum magni hic numquam incidunt\n      dolores voluptatibus corporis rem\n    </div>\n  </ng-template>\n\n  <div class="footer" prizmStepperFooter>\n    <button\n      [disabled]="toPrevStepDisabled"\n      (click)="toPrevStep()"\n      prizmButton\n      appearanceType="outline"\n      appearance="primary"\n      size="l"\n    >\n      \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0448\u0430\u0433\n    </button>\n    <button\n      *ngIf="currentStep !== 5"\n      [disabled]="toNextStepDisabled"\n      (click)="toNextStep()"\n      prizmButton\n      appearanceType="outline"\n      appearance="primary"\n      size="l"\n    >\n      \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433\n    </button>\n\n    <button *ngIf="currentStep === 5" prizmButton appearanceType="outline" appearance="success" size="l">\n      \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c\n    </button>\n  </div>\n</prizm-stepper>\n');
            }
            ngOnInit() {
              this.parse();
            }
            parse() {
              const n = (0, t.rI)(this.html),
                i = new t.Xc(this.tasks);
              this.result = (0, t.AR)(i.processTasks(n));
            }
          }
          return (
            (o.ɵfac = function (n) {
              return new (n || o)();
            }),
            (o.ɵcmp = e.Xpm({
              type: o,
              selectors: [['prizm-ast-input-select-example']],
              decls: 3,
              vars: 2,
              consts: [
                ['filename', 'Source', 3, 'code'],
                ['filename', 'Result', 3, 'code'],
              ],
              template: function (n, i) {
                1 & n && e._UZ(0, 'prizm-doc-code', 0)(1, 'br')(2, 'prizm-doc-code', 1),
                  2 & n && (e.Q6J('code', i.html), e.xp6(2), e.Q6J('code', i.result));
              },
              dependencies: [s.c],
              styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })();
      function ro(o, r) {
        if (
          (1 & o &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-ast-button-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-ast-accordion-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-ast-breadcrumb-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-ast-checkbox-example'),
            e.qZA(),
            e.TgZ(8, 'prizm-doc-example', 8),
            e._UZ(9, 'prizm-ast-chips-example'),
            e.qZA(),
            e.TgZ(10, 'prizm-doc-example', 9),
            e._UZ(11, 'prizm-ast-multi-select-example'),
            e.qZA(),
            e.TgZ(12, 'prizm-doc-example', 10),
            e._UZ(13, 'prizm-ast-radio-example'),
            e.qZA(),
            e.TgZ(14, 'prizm-doc-example', 11),
            e._UZ(15, 'prizm-ast-dropdown-example'),
            e.qZA(),
            e.TgZ(16, 'prizm-doc-example', 12),
            e._UZ(17, 'prizm-ast-input-switch-example'),
            e.qZA(),
            e.TgZ(18, 'prizm-doc-example', 13),
            e._UZ(19, 'prizm-ast-split-button-example'),
            e.qZA(),
            e.TgZ(20, 'prizm-doc-example', 14),
            e._UZ(21, 'prizm-ast-toggle-button-example'),
            e.qZA(),
            e.TgZ(22, 'prizm-doc-example', 15),
            e._UZ(23, 'prizm-ast-spinner-example'),
            e.qZA(),
            e.TgZ(24, 'prizm-doc-example', 16),
            e._UZ(25, 'prizm-ast-tooltip-example'),
            e.qZA(),
            e.TgZ(26, 'prizm-doc-example', 17),
            e._UZ(27, 'prizm-ast-tabs-example'),
            e.qZA(),
            e.TgZ(28, 'prizm-doc-example', 18),
            e._UZ(29, 'prizm-ast-input-number-example'),
            e.qZA(),
            e.TgZ(30, 'prizm-doc-example', 19),
            e._UZ(31, 'prizm-ast-input-example'),
            e.qZA(),
            e.TgZ(32, 'prizm-doc-example', 20),
            e._UZ(33, 'prizm-ast-textarea-example'),
            e.qZA(),
            e.TgZ(34, 'prizm-doc-example', 21),
            e._UZ(35, 'prizm-ast-input-select-example'),
            e.qZA()),
          2 & o)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.buttonExample),
            e.xp6(2),
            e.Q6J('content', n.accordionExample),
            e.xp6(2),
            e.Q6J('content', n.breadcrumbExample),
            e.xp6(2),
            e.Q6J('content', n.checkboxExample),
            e.xp6(2),
            e.Q6J('content', n.chipsExample),
            e.xp6(2),
            e.Q6J('content', n.multiSelectExample),
            e.xp6(2),
            e.Q6J('content', n.radioExample),
            e.xp6(2),
            e.Q6J('content', n.dropdownExample),
            e.xp6(2),
            e.Q6J('content', n.inputSwitchExample),
            e.xp6(2),
            e.Q6J('content', n.splitButtonExample),
            e.xp6(2),
            e.Q6J('content', n.toggleButtonExample),
            e.xp6(2),
            e.Q6J('content', n.spinnerExample),
            e.xp6(2),
            e.Q6J('content', n.tooltipExample),
            e.xp6(2),
            e.Q6J('content', n.tabsExample),
            e.xp6(2),
            e.Q6J('content', n.inputNumberExample),
            e.xp6(2),
            e.Q6J('content', n.inputExample),
            e.xp6(2),
            e.Q6J('content', n.textareaExample),
            e.xp6(2),
            e.Q6J('content', n.inputSelectExample);
        }
      }
      function so(o, r) {
        if ((1 & o && (e.TgZ(0, 'ol', 22)(1, 'li'), e._UZ(2, 'prizm-doc-code', 23), e.qZA()()), 2 & o)) {
          const n = e.oxw();
          e.xp6(2), e.Q6J('code', n.exampleModule);
        }
      }
      let lo = (() => {
        class o {
          constructor() {
            (this.exampleModule = a.e(80818).then(a.t.bind(a, 80818, 17))),
              (this.buttonExample = {
                TypeScript: a.e(50706).then(a.t.bind(a, 50706, 17)),
                HTML: a.e(30563).then(a.t.bind(a, 30563, 17)),
              }),
              (this.accordionExample = {
                TypeScript: a.e(99042).then(a.t.bind(a, 99042, 17)),
                HTML: a.e(39466).then(a.t.bind(a, 39466, 17)),
              }),
              (this.breadcrumbExample = {
                TypeScript: a.e(72871).then(a.t.bind(a, 72871, 17)),
                HTML: a.e(17158).then(a.t.bind(a, 17158, 17)),
              }),
              (this.checkboxExample = {
                TypeScript: a.e(8573).then(a.t.bind(a, 8573, 17)),
                HTML: a.e(68464).then(a.t.bind(a, 68464, 17)),
              }),
              (this.radioExample = {
                TypeScript: a.e(75167).then(a.t.bind(a, 75167, 17)),
                HTML: a.e(68687).then(a.t.bind(a, 68687, 17)),
              }),
              (this.chipsExample = {
                TypeScript: a.e(2320).then(a.t.bind(a, 2320, 17)),
                HTML: a.e(1346).then(a.t.bind(a, 1346, 17)),
              }),
              (this.dropdownExample = {
                TypeScript: a.e(44069).then(a.t.bind(a, 44069, 17)),
                HTML: a.e(46643).then(a.t.bind(a, 46643, 17)),
              }),
              (this.multiSelectExample = {
                TypeScript: a.e(82434).then(a.t.bind(a, 82434, 17)),
                HTML: a.e(84169).then(a.t.bind(a, 84169, 17)),
              }),
              (this.inputNumberExample = {
                TypeScript: a.e(17455).then(a.t.bind(a, 17455, 17)),
                HTML: a.e(29307).then(a.t.bind(a, 29307, 17)),
              }),
              (this.inputExample = {
                TypeScript: a.e(62647).then(a.t.bind(a, 62647, 17)),
                HTML: a.e(34608).then(a.t.bind(a, 34608, 17)),
              }),
              (this.textareaExample = {
                TypeScript: a.e(56136).then(a.t.bind(a, 56136, 17)),
                HTML: a.e(26627).then(a.t.bind(a, 26627, 17)),
              }),
              (this.inputSwitchExample = {
                TypeScript: a.e(26528).then(a.t.bind(a, 26528, 17)),
                HTML: a.e(97797).then(a.t.bind(a, 97797, 17)),
              }),
              (this.splitButtonExample = {
                TypeScript: a.e(65646).then(a.t.bind(a, 65646, 17)),
                HTML: a.e(48450).then(a.t.bind(a, 48450, 17)),
              }),
              (this.toggleButtonExample = {
                TypeScript: a.e(72059).then(a.t.bind(a, 651, 17)),
                HTML: a.e(54899).then(a.t.bind(a, 54899, 17)),
              }),
              (this.spinnerExample = {
                TypeScript: a.e(11985).then(a.t.bind(a, 11985, 17)),
                HTML: a.e(97812).then(a.t.bind(a, 97812, 17)),
              }),
              (this.tooltipExample = {
                TypeScript: a.e(93719).then(a.t.bind(a, 93719, 17)),
                HTML: a.e(24421).then(a.t.bind(a, 24421, 17)),
              }),
              (this.tabsExample = {
                TypeScript: a.e(17236).then(a.t.bind(a, 17236, 17)),
                HTML: a.e(71568).then(a.t.bind(a, 71568, 17)),
              }),
              (this.inputSelectExample = {
                TypeScript: a.e(13225).then(a.t.bind(a, 13225, 17)),
                HTML: a.e(917).then(a.t.bind(a, 917, 17)),
              });
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-overlay-example']],
            decls: 5,
            vars: 0,
            consts: [
              ['header', 'Ast'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', 'Setup'],
              ['id', 'base', 'heading', 'Button', 3, 'content'],
              ['id', 'accordion', 'heading', 'Accordion', 3, 'content'],
              ['id', 'breadcrumb', 'heading', 'Breadcrumb', 3, 'content'],
              ['id', 'checkbox', 'heading', 'Checkbox', 3, 'content'],
              ['id', 'chips', 'heading', 'Chips', 3, 'content'],
              ['id', 'multi-select', 'heading', 'Multi Select', 3, 'content'],
              ['id', 'radio', 'heading', 'Radio', 3, 'content'],
              ['id', 'dropdown', 'heading', 'Dropdown', 3, 'content'],
              ['id', 'input-switch', 'heading', 'Input Switch', 3, 'content'],
              ['id', 'split-button', 'heading', 'Split Button', 3, 'content'],
              ['id', 'toggle-button', 'heading', 'Toggle Button', 3, 'content'],
              ['id', 'spinner', 'heading', 'Spinner', 3, 'content'],
              ['id', 'tooltip', 'heading', 'Tooltip', 3, 'content'],
              ['id', 'tabs', 'heading', 'Tabs', 3, 'content'],
              ['id', 'input-number', 'heading', 'Input Number', 3, 'content'],
              ['id', 'input', 'heading', 'Input', 3, 'content'],
              ['id', 'textarea', 'heading', 'Textarea', 3, 'content'],
              ['id', 'input-select', 'heading', 'Input Select', 3, 'content'],
              [1, 'b-demo-steps'],
              ['filename', 'custom.component.ts', 3, 'code'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(2, 'Ast helpers for help to write your code updater or migrator'),
                e.qZA(),
                e.YNc(3, ro, 36, 18, 'ng-template', 2),
                e.YNc(4, so, 3, 1, 'ng-template', 3),
                e.qZA());
            },
            dependencies: [
              s.c,
              wn.W,
              Tn.l,
              Pn.a,
              Ln,
              Un,
              Qn,
              Jn,
              Vn,
              qn,
              Xn,
              $n,
              Wn,
              Gn,
              Kn,
              _n,
              to,
              eo,
              no,
              oo,
              ao,
              io,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          o
        );
      })();
      var mo = a(70169);
      let po = (() => {
        class o {}
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [Cn.ez, u.Qp, mo.KBf, vn.Bz.forChild((0, u.GB)(lo))] })),
          o
        );
      })();
    },
  },
]);
