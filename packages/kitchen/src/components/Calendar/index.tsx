import React from "react";
import {
  ActiveModifiers,
  DateFormatter,
  DateRange,
  DayPicker,
} from "react-day-picker";
import { RiCalendarLine } from "react-icons/ri";
import styled from "styled-components";

import { DecoratorProps, withDecorator } from "../../hoc";
import { KitchenComponent } from "../../types";
import Icon from "../Icon";
import { Menu, MenuButtonProps, MenuContainerProps } from "../Menu";
import Text from "../Text";

export type { ActiveModifiers, DateRange, DateFormatter };

export type SelectMultipleEventHandler = (
  /** The selected days */
  days: Date[] | undefined,
  /** The day that was clicked triggering the event. */
  selectedDay: Date,
  /** The day that was clicked */
  activeModifiers: ActiveModifiers,
  /** The mouse event that triggered this event. */
  e: MouseEvent,
) => void;

/** The event handler when selecting a range of days. */
export type SelectRangeEventHandler = (
  /** The current range of the selected days. */
  range: DateRange | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  activeModifiers: ActiveModifiers,
  e: MouseEvent,
) => void;

/** The event handler when selecting a single day. */
export type SelectSingleEventHandler = (
  /** The selected day, `undefined` when `required={false}` (default) and the day is clicked again. */
  day: Date | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  activeModifiers: ActiveModifiers,
  e: MouseEvent,
) => void;

export type KitchenDayPickerRangeProps = {
  mode: "range";
  /** The selected range of days. */
  selected?: DateRange | undefined;
  /** Event fired when a range (or a part of the range) is selected. */
  onSelect?: SelectRangeEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
};

export type KitchenDayPickerMultipleProps = {
  mode: "multiple";
  /** The selected days. */
  selected?: Date[] | undefined;
  /** Event fired when a days added or removed to the selection. */
  onSelect?: SelectMultipleEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
};

export type KitchenDayPickerSingleProps = {
  mode: "single";
  /** The selected day. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: boolean;
};

export type KitchenDayPickerDefaultProps = {
  mode?: undefined | "default";
};

export type KitchenDayPickerProps =
  | KitchenDayPickerDefaultProps
  | KitchenDayPickerSingleProps
  | KitchenDayPickerMultipleProps
  | KitchenDayPickerRangeProps;

type Props = KitchenDayPickerProps & {
  placeholder?: string;
  menuContainerProps?: MenuContainerProps & DecoratorProps;
  menuButtonProps?: MenuButtonProps & DecoratorProps;
};

export type CalendarProps = KitchenComponent<Props>;

export const formatWeekdayName: DateFormatter = (date, options) => {
  return date
    .toLocaleDateString(options?.locale?.code, { weekday: "short" })
    .slice(0, 1);
};

const CalendarComponent = styled(
  ({
    placeholder = "Select date",
    menuContainerProps,
    menuButtonProps,
    ...props
  }: CalendarProps) => {
    return (
      <Menu.Container {...menuContainerProps}>
        <Menu.Button
          unstyled={false}
          htmlType={"button"}
          prefix={<Icon icon={RiCalendarLine} />}
          type={"dark"}
          {...menuButtonProps}
        >
          <Text size={"small"}>
            {props.mode === "single" && props.selected
              ? "selected"
              : placeholder}
          </Text>
        </Menu.Button>
        <Menu.Content as={"div"} width={280}>
          <StyledDayPicker
            weekStartsOn={1}
            showOutsideDays
            formatters={{
              formatWeekdayName,
            }}
            {...props}
          />
        </Menu.Content>
      </Menu.Container>
    );
  },
)<CalendarProps>``;

const StyledDayPicker = styled(DayPicker)`
  &.rdp {
    padding: ${({ theme }) => theme.gap.tiny};

    .rdp-caption {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rdp-caption_label {
        font-size: ${({ theme }) => theme.size.small};
      }

      .rdp-nav {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.gap.normal};

        .rdp-button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: ${({ theme }) => theme.gap.tiny};
          transition: background-color 0.2s;
          padding: 0;

          .rdp-nav_icon {
            height: 10px;
            width: 10px;
            color: ${({ theme }) => theme.colors.text.light};
          }
        }
      }
    }

    .rdp-table {
      display: block;
      order-collapse: collapse;
      table-layout: fixed;
      margin-top: ${({ theme }) => theme.gap.small};

      .rdp-head {
        display: block;
        .rdp-head_row {
          display: flex;
          flex-wrap: nowrap;
          margin-top: ${({ theme }) => theme.gap.tiny};
          .rdp-head_cell {
            flex: 1;
            text-align: center;
            padding: 0;
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.size.tiny};
            color: ${({ theme }) => theme.colors.text.light};
          }
        }
      }

      .rdp-tbody {
        display: block;
        margin-top: ${({ theme }) => theme.gap.tiny};
        .rdp-row {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          margin-top: ${({ theme }) => theme.gap.tiny};
          .rdp-cell {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: ${({ theme }) => theme.size.normal};
            transition: background-color 0.2s;
            width: 32px;
            height: 32px;
            padding: 0;

            .rdp-button {
              z-index: 1;
              outline: none;
              display: block;
              line-height: 30px;
              width: 32px;
              height: 32px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              margin: 0;
              background-color: transparent;
              cursor: pointer;
              border: 1px solid transparent;
              transition:
                background-color 0.2s,
                border 0.2s,
                border-radius 0.2s;

              &.rdp-day_outside {
                color: ${({ theme }) => theme.colors.text.light};
              }

              &:hover {
                border: 1px solid ${({ theme }) => theme.colors.layout.light};
              }

              &.rdp-day_today {
                background-color: ${({ theme }) => theme.colors.layout.dark};
              }

              &.rdp-day_selected {
                background-color: ${({ theme }) =>
                  theme.colors.layout.lightest};
                color: ${({ theme }) => theme.colors.text.darkest};
                border: 1px solid ${({ theme }) => theme.colors.layout.lightest};
              }

              &.rdp-day_range_middle {
                background-color: ${({ theme }) => theme.colors.layout.dark};
                color: ${({ theme }) => theme.colors.text.lightest};
                border: 1px solid transparent;
                border-radius: 0;
                height: 28px;
                line-height: 26px;

                &.rdp-day_today {
                  background-color: ${({ theme }) => theme.colors.layout.dark};
                  height: 32px;
                  line-height: 30px;
                  border-radius: 4px;
                }
              }
            }

            &:first-child {
              .rdp-button {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
              }
            }

            &:last-child {
              .rdp-button {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              }
            }
          }
        }
      }
    }
  }
`;

CalendarComponent.displayName = "KitchenCalendar";
export const Calendar = withDecorator(CalendarComponent);
export default Calendar;
