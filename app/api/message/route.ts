// import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  // try {
  //   const result: any = await prisma.message.create({
  //     data: {
  //       name: body.name,
  //       email: body.email,
  //       message: body.message,
  //       phone: body.phone,
  //     },
  //   });
  //   return NextResponse.json(result);
  // } catch (err: any) {
  //   console.log("Error Code", err.code, err.message);
  //   switch (err.code) {
  //     case "P2002":
  //       return new NextResponse(
  //         JSON.stringify({
  //           error: "Duplicate Key",
  //           statusCode: err.code,
  //           message: err.message,
  //         }),
  //         {
  //           status: 500,
  //         },
  //       );
  //     default:
  //       return new NextResponse(
  //         JSON.stringify({
  //           error: "Missing field attributes",
  //           statusCode: err.code,
  //           message: err.message,
  //         }),
  //         {
  //           status: 500,
  //         },
  //       );
  //   }
  // }
}
