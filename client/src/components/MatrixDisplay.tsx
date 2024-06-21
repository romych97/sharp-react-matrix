
const MatrixDisplay = ({ matrix }: any) => {
    return (
        <table>
            <tbody>
                {matrix && matrix.map((row: any, rowIndex: any) => (
                    <tr key={rowIndex}>
                        {row.length ? row.map((cell: any, colIndex: any) => (
                            <td key={colIndex}>{cell}</td>
                        )) : (
                            <td key={row}>{row}</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MatrixDisplay;