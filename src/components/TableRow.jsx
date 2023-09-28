import { ChevronRightIcon } from "@heroicons/react/20/solid";
const statusStyles = {
  present: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  absent: "bg-red-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TableRow = ({ tableHeading, tableData }) => {
  return (
    <>
      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {tableData.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate">{transaction.name}</span>

                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>

                      <span
                          className={classNames(
                            statusStyles[transaction.status],
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}
                        >
                          {transaction.status}
                        </span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 flex flex-col">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    {tableHeading.map((heading, index) => (
                      <th
                        key={index}
                        className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        {heading.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableData.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="group inline-flex space-x-2 truncate text-sm"
                          >
                            <p className="truncate text-gray-500 group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                        <span
                          className={classNames(
                            statusStyles[transaction.status],
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
