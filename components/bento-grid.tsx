import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

function BentoGrid({}: Props) {
  return (
    <div className="p-5 justify-between">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        <Card className="bg-card flex flex-col p-6 border border-border rounded-3xl gap-1 col-span-4 row-span-2">
          <CardHeader>
            <CardTitle>Balance</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col  border border-border rounded-3xl gap-1 col-span-2 row-span-2">
          <CardHeader>
            <CardTitle>Card Title 2</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border border-border rounded-3xl gap-1 col-span-2 row-span-2">
          <CardHeader>
            <CardTitle>Card Title 3</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border border-border rounded-3xl gap-1 col-span-2 row-span-1">
          <CardHeader>
            <CardTitle>Card Title 4</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border border-border rounded-3xl gap-1 col-span-2 row-span-1">
          <CardHeader>
            <CardTitle>Card Title 5</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border border-border rounded-3xl gap-1 col-span-4">
          <CardHeader>
            <CardTitle>Card Title 6</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default BentoGrid;
