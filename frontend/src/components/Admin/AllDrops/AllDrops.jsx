import React from 'react'

const AllDrops = () => {
    return (
        <>
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">

                {/* Table Section */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Card */}
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                    {/* Header */}
                                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                Users
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Add users, edit and more.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="inline-flex gap-x-2">
                                                <a
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                    href="#"
                                                >
                                                    View all
                                                </a>
                                                <a
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="w-3 h-3"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Add user
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Header */}
                                    {/* Table */}
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-slate-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="pl-6 py-3 text-left"
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Position
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Status
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Portfolio
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                            Created
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-right" />
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    Christina Bersh
                                                                </span>
                                                                <span className="block text-sm text-gray-500">
                                                                    christina@site.com
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                            Director
                                                        </span>
                                                        <span className="block text-sm text-gray-500">
                                                            Human resources
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            <svg
                                                                className="w-2.5 h-2.5"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                                <div
                                                                    className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                                                    role="progressbar"
                                                                    style={{ width: "25%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500">
                                                            28 Dec, 12:12
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a
                                                            className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            href="#"
                                                        >
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    {/* End Table */}
                                    {/* Footer */}
                                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                                    6
                                                </span>{" "}
                                                results
                                            </p>
                                        </div>
                                        <div>
                                            <div className="inline-flex gap-x-2">
                                                <button
                                                    type="button"
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                >
                                                    <svg
                                                        className="w-3 h-3"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                        />
                                                    </svg>
                                                    Prev
                                                </button>
                                                <button
                                                    type="button"
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                >
                                                    Next
                                                    <svg
                                                        className="w-3 h-3"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Footer */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Table Section */}
            </div>
        </>
    )
}

export default AllDrops