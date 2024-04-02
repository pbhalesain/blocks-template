import classNames from 'classnames'
import React from 'react'

interface GridProps {
	cols?: number | { base?: number, md?: number, lg?: number, xl?: number }
	gap?: number | { base?: number, md?: number, lg?: number, xl?: number }
	children: React.ReactNode
}

interface GridItemProps {
	col?: number | { base?: number, md?: number, lg?: number, xl?: number }
	row?: number | { base?: number, md?: number, lg?: number, xl?: number }
	rowSpan?: number | { base?: number, md?: number, lg?: number, xl?: number }
	colSpan?: number | { base?: number, md?: number, lg?: number, xl?: number }
	children: React.ReactNode
}

const getGridCols = (cols?: GridProps['cols']) => {
	if (!cols) return 'grid-cols-1'

	if (typeof cols === 'number') {
		return `grid-cols-${cols}`
	}

	return classNames({
		'grid-cols-1': !cols.base && !cols.md && !cols.lg && !cols.xl,
		[`sm:grid-cols-${cols.base}`]: cols.base,
		[`md:grid-cols-${cols.md}`]: cols.md,
		[`lg:grid-cols-${cols.lg}`]: cols.lg,
		[`xl:grid-cols-${cols.xl}`]: cols.xl,
	})
}

const getGridGap = (gap?: GridProps['gap']) => {
	if (!gap) return 'gap-4'

	if (typeof gap === 'number') {
		return `gap-${gap}`
	}

	return classNames({
		'gap-4': !gap.base && !gap.md && !gap.lg && !gap.xl,
		[`sm:gap-${gap.base}`]: gap.base,
		[`md:gap-${gap.md}`]: gap.md,
		[`lg:gap-${gap.lg}`]: gap.lg,
		[`xl:gap-${gap.xl}`]: gap.xl,
	})
}

const getGridItemCols = (col?: GridItemProps['col']) => {
	if (!col) return ''

	if (typeof col === 'number') {
		return `col-span-${col}`
	}

	return classNames({
		[`sm:col-span-${col.base}`]: col.base,
		[`md:col-span-${col.md}`]: col.md,
		[`lg:col-span-${col.lg}`]: col.lg,
		[`xl:col-span-${col.xl}`]: col.xl,
	})
}

const getGridItemRows = (row?: GridItemProps['row']) => {
	if (!row) return ''

	if (typeof row === 'number') {
		return `row-start-${row}`
	}

	return classNames({
		[`sm:row-start-${row.base}`]: row.base,
		[`md:row-start-${row.md}`]: row.md,
		[`lg:row-start-${row.lg}`]: row.lg,
		[`xl:row-start-${row.xl}`]: row.xl,
	})
}

const getGridItemRowSpan = (rowSpan?: GridItemProps['rowSpan']) => {
	if (!rowSpan) return ''

	if (typeof rowSpan === 'number') {
		return `row-span-${rowSpan}`
	}

	return classNames({
		[`sm:row-span-${rowSpan.base}`]: rowSpan.base,
		[`md:row-span-${rowSpan.md}`]: rowSpan.md,
		[`lg:row-span-${rowSpan.lg}`]: rowSpan.lg,
		[`xl:row-span-${rowSpan.xl}`]: rowSpan.xl,
	})
}

const getGridItemColSpan = (colSpan?: GridItemProps['colSpan']) => {
	if (!colSpan) return ''

	if (typeof colSpan === 'number') {
		return `col-span-${colSpan}`
	}

	return classNames({
		[`sm:col-span-${colSpan.base}`]: colSpan.base,
		[`md:col-span-${colSpan.md}`]: colSpan.md,
		[`lg:col-span-${colSpan.lg}`]: colSpan.lg,
		[`xl:col-span-${colSpan.xl}`]: colSpan.xl,
	})
}

export const Grid: React.FC<GridProps> = ({ cols, gap, children }) => {
	return (
		<div className={classNames('grid', getGridCols(cols), getGridGap(gap))}>
			{children}
		</div>
	)
}

const GridItem: React.FC<GridItemProps> = ({ col, row, rowSpan, colSpan, children }) => {
	return (
		<div
			className={classNames(
				getGridItemCols(col),
				getGridItemRows(row),
				getGridItemRowSpan(rowSpan),
				getGridItemColSpan(colSpan)
			)}
		>
			{children}
		</div>
	)
}

const GridComponents = Object.assign(Grid, { Item: GridItem })

export default { Grid, Item: GridItem, GridComponents }