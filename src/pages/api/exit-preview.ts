export default async (
  _: any,
  res: {
    clearPreviewData: () => void;
    writeHead: (arg0: number, arg1: { Location: string }) => void;
    end: () => void;
  }
) => {
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
};
