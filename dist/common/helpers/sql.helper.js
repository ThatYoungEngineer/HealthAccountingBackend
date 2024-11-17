"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginatedSqlGroupBy = exports.generatePaginatedSql = void 0;
function generatePaginatedSql(selectString, fromString, whereString, page, rowsPerPage) {
    const offSet = (page - 1) * rowsPerPage;
    const paginatedSql = `SELECT COUNT(1) AS totalRows 
  FROM ${fromString} 
  WHERE ${whereString};
  SELECT ${selectString} 
  FROM ${fromString} 
  WHERE ${whereString} 
  LIMIT ${rowsPerPage}
  OFFSET ${offSet};
  `;
    return paginatedSql;
}
exports.generatePaginatedSql = generatePaginatedSql;
function generatePaginatedSqlGroupBy(selectString, fromString, whereString, groupByString, orderByString, page, rowsPerPage) {
    const offSet = (page - 1) * rowsPerPage;
    const paginatedSql = `SELECT COUNT(1) AS totalRows 
  FROM (SELECT ${selectString} 
        FROM ${fromString} 
      WHERE ${whereString}
      GROUP BY ${groupByString}
      ORDER BY ${groupByString}
  ) SUBQUERY;
  SELECT ${selectString} 
  FROM ${fromString} 
  WHERE ${whereString} 
  GROUP BY ${groupByString}
  ORDER BY ${orderByString}
  LIMIT ${rowsPerPage}
  OFFSET ${offSet};
  `;
    return paginatedSql;
}
exports.generatePaginatedSqlGroupBy = generatePaginatedSqlGroupBy;
//# sourceMappingURL=sql.helper.js.map