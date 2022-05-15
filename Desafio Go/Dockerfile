FROM golang:1.18 as builder

WORKDIR /usr/src/app

COPY . .

RUN go build -v app.go

FROM scratch

# RUN ls
COPY --from=builder /usr/src/app/app .

CMD ["./app"]