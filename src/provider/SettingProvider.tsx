import React, { createContext, useState, FC, useEffect } from "react";
import SettingApi from "../lib/api/settings";
import { Setting } from "../lib/types/settings";
import { contextDefaultValues } from "./values/setting-default-values";
import useBooleanToggler from "../lib/hooks/useBooleanToggler"
import { ApiError } from "../lib/types/error";
import useAlert from "../lib/hooks/useAlert";
import { TOAST_TYPE } from '../lib/types/alert';
import { Button } from "../app/components/button";


export const SettingContext = createContext<Setting>(
  contextDefaultValues
);

const SettingProvider: FC = ({ children }) => {
    const {
        isToggled: isWorking,
        reToggle: startWork,
        unToggle: finishWork,
      } = useBooleanToggler();
      const {showMessage} = useAlert();

  const [setting, setSetting] = useState<Setting>(contextDefaultValues);

  useEffect(() => {
    startWork()
    SettingApi.getSetting().then((response)=> {
        console.log(response);
      finishWork()
      if ((response as ApiError).message) {
        const {message} = response as ApiError;
        showMessage(message, TOAST_TYPE.ERROR);
      } else {
        setSetting(response as Setting)
      }
    })
  }, [])

  return (
    <SettingContext.Provider
      value={setting}
    >
      {isWorking?  <Button theme="filled" text="Cargando..." /> : children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;