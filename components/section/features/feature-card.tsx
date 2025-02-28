import { Card, CardContent } from "../../ui/card"

function FeatureCard() {
  return (
    <Card className="rounded-3xl border-none bg-neutral-50 p-0 shadow-none">
      <CardContent className="flex flex-col gap-8 p-4">
        <div className="h-96 rounded-xl border border-neutral-300 bg-neutral-200 shadow" />
        <div className="flex flex-col items-start space-y-1.5 pb-5">
          <h4 className="text-xl font-medium">
            Streamlined Workflow Management
          </h4>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Facilisi gravida vitae
            scelerisque nunc. Tincidunt maecenas sed consectetur senectus.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
