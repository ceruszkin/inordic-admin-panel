import React from "react";
import "./index.css";

/**
 * Компонент для вывода блока с ошибкой.
 * @returns компонент ErrorBlock
 */

export function ErrorBlock({errorText}){
    return(
        <div className="error-block">
            {errorText}
        </div>
    )
}