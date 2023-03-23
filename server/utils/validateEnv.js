import { cleanEnv, port, str } from "envalid";
import "dotenv/config";

export default cleanEnv(process.env, {
  NEWDB: str(),
  JWT_KEY: str(),
  PORT: port(),
  SAME_SITE: str(),
  CLIENT_DOMAIN: str(),
});
