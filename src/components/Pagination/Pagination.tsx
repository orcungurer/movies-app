import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Pagination.module.css";
import { RootState } from "@/store";
import { paginationActions } from "@/store/paginationSlice";
import Button from "../UI/Button/Button";

const maxButtons = 7;
const visibleRange = 6;
const itemsPerPage = 10;

const Pagination = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const totalElements = useSelector(
    (state: RootState) => state.pagination.totalElements
  );
  const totalPage = Math.ceil(totalElements / itemsPerPage);

  const startingPage = Math.max(
    Math.min(
      currentPage - Math.floor(visibleRange / 2),
      totalPage - maxButtons + 1
    ),
    1
  );

  const endingPage = Math.min(startingPage + maxButtons - 1, totalPage);

  const pageNumbers = Array.from(
    { length: endingPage - startingPage + 1 },
    (_, i) => i + startingPage
  );

  const isEmpty = pageNumbers.length === 0;

  const startItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const endItemIndex = Math.min(currentPage * itemsPerPage, totalElements);

  return (
    <Fragment>
      {totalElements > 0 && (
        <p className={classes.info}>
          {startItemIndex}-{endItemIndex} of {totalElements} items
        </p>
      )}
      <div className={classes.pagination}>
        <Button
          type="button"
          disabled={currentPage === 1}
          onClick={() => dispatch(paginationActions.decreaseCurrentPage())}
          outline={currentPage !== 1}
        >
          Prev
        </Button>
        <Button
          type="button"
          key={1}
          onClick={() => dispatch(paginationActions.setCurrentPage(1))}
          outline={currentPage !== 1}
        >
          1
        </Button>
        {startingPage > 1 && (
          <Button type="button" disabled>
            ...
          </Button>
        )}

        {pageNumbers.map(
          (pageNumber) =>
            pageNumber !== 1 &&
            pageNumber !== totalPage && (
              <Button
                type="button"
                key={pageNumber}
                onClick={() =>
                  dispatch(paginationActions.setCurrentPage(pageNumber))
                }
                outline={pageNumber !== currentPage}
              >
                {pageNumber}
              </Button>
            )
        )}

        {endingPage < totalPage - 1 && (
          <Button type="button" disabled>
            ...
          </Button>
        )}
        {startingPage !== endingPage && !isEmpty && (
          <Button
            type="button"
            key={totalPage}
            onClick={() =>
              dispatch(paginationActions.setCurrentPage(totalPage))
            }
            outline={currentPage !== totalPage}
          >
            {totalPage}
          </Button>
        )}
        <Button
          type="button"
          disabled={currentPage === totalPage || isEmpty}
          onClick={() => dispatch(paginationActions.increaseCurrentPage())}
          outline={currentPage !== totalPage}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default Pagination;
