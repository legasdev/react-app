import { createSelector } from "reselect";

/**
 * 
 * Выборка из стейта (пользователи)
 * с использованием библиотеки reselect
 * 
 *
*/

// Примитивные селекторы

const _getUsers = state => state.usersPage.users;
export const getPageSizeSelector = state => state.usersPage.pageSize;
export const getTotalUsersCountSelector = state => state.usersPage.totalUsersCount;
export const getCurrentPageSelector = state => state.usersPage.currentPage;
export const getFetchingSelector = state => state.usersPage.isFetching;
export const getFollowingInProgressSelector = state => state.usersPage.followingInProgress;


// With Reselect

export const getUsersSuperSelector = createSelector( 
    _getUsers,
    users => users
);