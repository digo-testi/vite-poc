import Vue from "vue";

export const sucessMessageChannel = "successMessage";
export const errorMessageChannel = "errorMessage";
export const actionChannel = "action";
export const infoChannel = "info";
export const newPopupListener = "newpopup";
export const closePopupListener = "closepopup";
export const closeAllPopupListener = "closeallpopup";

export const findByDate = "findByDate";
export const findByCompany = "findByCompany";
export const findPaymentByMonth = "findPaymentByMonth";

export const messageBus = new Vue();

const actionListener = (channel: any, callback: any) => {
  messageBus.$off(channel);
  messageBus.$on(channel, (data: any) => {
    callback(data);
  });
};

const actionSend = (channel: any, message: any) => {
  messageBus.$emit(channel, message);
};

export const sucessMessage = (message: any) => {
  actionSend(sucessMessageChannel, message);
};

export const getSucessMessage = (callback: any) => {
  actionListener(sucessMessageChannel, callback);
};

export const errorMessage = (message: any) => {
  actionSend(errorMessageChannel, message);
};

export const getErrorMessage = (callback: any) => {
  actionListener(errorMessageChannel, callback);
};

export const infoMessage = (message: any) => {
  actionSend(infoChannel, message);
};

export const getInfoMessage = (callback: any) => {
  actionListener(infoChannel, callback);
};

export const findbyDateMessage = (message: any) => {
  actionSend(findByDate, message);
};

export const getFindByDate = (callback: any) => {
  actionListener(findByDate, callback);
};

export const findbyCompanyMessage = (message: any) => {
  actionSend(findByCompany, message);
};

export const getFindByComapany = (callback: any) => {
  actionListener(findByCompany, callback);
};
export const getPaymentByMonth = (callback: any) => {
  actionListener(findPaymentByMonth, callback);
};

export const getNewPopup = (callback: any) => {
  actionListener(newPopupListener, callback);
};

export const getClosePopup = (callback: any) => {
  actionListener(closePopupListener, callback);
};

export const getCloseAllPopup = (callback: any) => {
  actionListener(closeAllPopupListener, callback);
};

export const openPopupBus = (data: any) => {
  messageBus.$emit(newPopupListener, {
    component: data.component,
    props: data.props,
  });
};

export const sendAction = (data: any) => {
  actionSend(actionChannel, data);
};

export const getAction = (callback: any) => {
  messageBus.$once(actionChannel, (data: any) => {
    callback(data);
  });
};
