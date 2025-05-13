import { ComponentProps } from "react";

export type CustomDivComponentProps<T> = ComponentProps<"div"> & T
