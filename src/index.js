'use strict';

import { getSession, logIn, logOut } from "./authentication";
import {
  changePassword,
  changeUsername,
  deleteUser,
  getUser,
  getUsersDatabaseUrl,
  putUser,
  signUp,
} from "./users";

var plugin = {};

plugin.login = logIn;
plugin.logIn = logIn;
plugin.logout = logOut;
plugin.logOut = logOut;
plugin.getSession = getSession;

plugin.getUsersDatabaseUrl = getUsersDatabaseUrl;
plugin.signup = signUp;
plugin.signUp = signUp;
plugin.getUser = getUser;
plugin.putUser = putUser;
plugin.deleteUser = deleteUser;
plugin.changePassword = changePassword;
plugin.changeUsername = changeUsername;

if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}

export default plugin;
