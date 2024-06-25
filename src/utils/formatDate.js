import dayjs from "dayjs";

export const formatDate = () => dayjs(new Date()).format("DD MMM YYYY");
