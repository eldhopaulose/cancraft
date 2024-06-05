import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import Champagne from '../../src/assets/f7e7ce.jpg';

export function OrderCard() {
    return (
        <Card className="max-w-[20rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={Champagne}
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    30x40 cm
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                    follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                        <h3 className="font-bold text-red-500">Cancel Order</h3>
                    </Tooltip>

                </div>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter>
        </Card>
    );
}