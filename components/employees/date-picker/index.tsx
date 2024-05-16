import React, { FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { PopoverClose } from "@radix-ui/react-popover";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { SelectSingleEventHandler } from "react-day-picker";

type DatePickerProps = {
  onSelect: SelectSingleEventHandler;
  value?: string;
  placeholder: string;
};

const DatePicker: FC<DatePickerProps> = ({ onSelect, value, placeholder }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="popover"
          className={`w-full text-left font-normal
      ${!value} && "text-muted-foreground",
    `}
        >
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gray" />

            {value ? (
              format(value, "dd/MM/yyyy")
            ) : (
              <span className="text-placeholder">{placeholder}</span>
            )}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <PopoverClose>
          <Calendar
            mode="single"
            captionLayout="dropdown"
            fromYear={2015}
            toYear={2035}
            selected={new Date(value ? value : "")}
            onSelect={onSelect}
            defaultMonth={value ? new Date(value) : new Date()}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
